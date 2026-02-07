import { javascript, awscdk, web } from "projen";

export interface MonorepoProjectOptions {
  defaultReleaseBranch?: string;
  name: string;
  repository: string;
  packageManager?: javascript.NodePackageManager;
}
export class MonorepoProject extends javascript.NodeProject {
  constructor(options: MonorepoProjectOptions) {
    const defaultReleaseBranch = options?.defaultReleaseBranch ?? "main";

    super({
      ...options,
      defaultReleaseBranch,
      packageManager: options.packageManager ?? javascript.NodePackageManager.PNPM,
    });

    new awscdk.AwsCdkTypeScriptApp({
      parent: this,
      outdir: "infrastructure",
      name: "infrastructure",
      defaultReleaseBranch: defaultReleaseBranch,
      cdkVersion: "2.147.0",
    });

    new web.ReactTypeScriptProject({
      parent: this,
      outdir: "frontend",
      name: "frontend",
      defaultReleaseBranch: defaultReleaseBranch,
    });
  }
}
