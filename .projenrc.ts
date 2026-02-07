import { typescript } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "@flocoder93/base-project",
  projenrcTs: true,
  releaseToNpm: true,
  depsUpgrade: false,
  renovatebot: true,
  packageManager: NodePackageManager.PNPM,
  minNodeVersion: "24.0.0",
  workflowNodeVersion: "24.13.0", // defaults to minNodeVersion
  workflowPackageCache: false,
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

project.synth();
