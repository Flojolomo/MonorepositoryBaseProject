import { cdk } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
const project = new cdk.JsiiProject({
  author: "flocoder93",
  authorAddress: "https://github.com/Flojolomo",
  defaultReleaseBranch: "main",
  name: "@flocoder93/base-project",
  repositoryUrl: "https://github.com/Flojolomo/MonorepositoryBaseProject.git",
  projenrcTs: true,
  releaseToNpm: true,
  npmTrustedPublishing: true,
  depsUpgrade: false,
  renovatebot: true,
  packageManager: NodePackageManager.PNPM,
  minNodeVersion: "24.0.0",
  workflowNodeVersion: "24.13.0",
  workflowPackageCache: false,
  deps: ["projen"],
  peerDeps: ["projen", "constructs"],
  devDeps: ["@jest/globals"],
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      tabWidth: 2,
    },
  },
});

project.synth();
