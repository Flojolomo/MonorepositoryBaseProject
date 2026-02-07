import { javascript, awscdk, web } from "projen";

export interface MonorepoProjectOptions {
  readonly defaultReleaseBranch?: string;
  readonly name: string;
  readonly repository: string;
  readonly packageManager?: javascript.NodePackageManager;
}
export class MonorepoProject extends javascript.NodeProject {
  constructor(options: MonorepoProjectOptions) {
    const defaultReleaseBranch = options?.defaultReleaseBranch ?? "main";
    const packageManager = options.packageManager ?? javascript.NodePackageManager.PNPM;

    super({
      ...options,
      defaultReleaseBranch,
      packageManager,
    });

    new awscdk.AwsCdkTypeScriptApp({
      parent: this,
      outdir: "infrastructure",
      name: "infrastructure",
      defaultReleaseBranch: defaultReleaseBranch,
      cdkVersion: "2.147.0",
      packageManager,
    });

    new web.ReactTypeScriptProject({
      parent: this,
      outdir: "frontend",
      name: "frontend",
      defaultReleaseBranch: defaultReleaseBranch,
      packageManager,
    });
  }
}
