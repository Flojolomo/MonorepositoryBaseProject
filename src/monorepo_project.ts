import { javascript, awscdk, web, TextFile } from "projen";

export interface MonorepoProjectOptions {
  readonly defaultReleaseBranch?: string;
  readonly name: string;
  readonly repository: string;
  readonly packageManager?: javascript.NodePackageManager;
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

    new TextFile(this, ".projenrc.ts", {
      lines: [
        'import { MonorepoProject } from "./src";',
        "",
        "const project = new MonorepoProject({",
        `  name: "${options.name}",`,
        `  repository: "${options.repository}",`,
        "});",
        "",
        "project.synth();",
      ],
    });
  }
}
