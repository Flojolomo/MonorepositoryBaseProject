import { typescript } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "@flocoder93/base-project",
  projenrcTs: true,
  releaseToNpm: true,
  packageManager: NodePackageManager.YARN_BERRY,
  workflowNodeVersion: "lts/*",
  deps: ["projen"] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ["@jest/globals"] /* Build dependencies for this module. */,
  // packageName: undefined,  /* The "name" in package.json. */
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      tabWidth: 2,
    },
  },
});

// Enable Corepack for Yarn Berry in GitHub Actions
const releaseWorkflow = project.github?.tryFindWorkflow("release");
if (releaseWorkflow) {
  releaseWorkflow.file?.addOverride("jobs.release.steps", [
    { name: "Checkout", uses: "actions/checkout@v5", with: { "fetch-depth": 0 } },
    { name: "Setup Node.js", uses: "actions/setup-node@v5", with: { "node-version": "lts/*" } },
    { name: "Enable Corepack", run: "corepack enable" },
    { name: "Set git identity", run: 'git config user.name "github-actions[bot]"\ngit config user.email "41898282+github-actions[bot]@users.noreply.github.com"' },
    { name: "Install dependencies", run: "yarn install --immutable" },
    { name: "release", run: "npx projen release" },
    { name: "Check if version has already been tagged", id: "check_tag_exists", run: 'TAG=$(cat dist/releasetag.txt)\n([ ! -z "$TAG" ] && git ls-remote -q --exit-code --tags origin $TAG && (echo "exists=true" >> $GITHUB_OUTPUT)) || (echo "exists=false" >> $GITHUB_OUTPUT)\ncat $GITHUB_OUTPUT' },
    { name: "Check for new commits", id: "git_remote", run: 'echo "latest_commit=$(git ls-remote origin -h ${{ github.ref }} | cut -f1)" >> $GITHUB_OUTPUT\ncat $GITHUB_OUTPUT', shell: "bash" },
    { name: "Backup artifact permissions", if: "${{ steps.git_remote.outputs.latest_commit == github.sha }}", run: "cd dist && getfacl -R . > permissions-backup.acl", "continue-on-error": true },
    { name: "Upload artifact", if: "${{ steps.git_remote.outputs.latest_commit == github.sha }}", uses: "actions/upload-artifact@v4.6.2", with: { name: "build-artifact", path: "dist", overwrite: true } },
  ]);
}

project.synth();
