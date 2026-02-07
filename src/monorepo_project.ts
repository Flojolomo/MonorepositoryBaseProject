import { javascript, awscdk, web } from 'projen';

export class MyMonorepoProject extends javascript.NodeProject {
  constructor() {
    super({
      defaultReleaseBranch: 'main',
      name: 'monorepo-base-project',
      repository: 'https://github.com/Flojolomo/MonorepositoryBaseProject.git',
      packageManager: javascript.NodePackageManager.YARN_BERRY, // or YARN/NPM
    });

    new awscdk.AwsCdkTypeScriptApp({
      parent: this,
      outdir: 'infrastructure',
      name: 'infrastructure',
      defaultReleaseBranch: 'main',
      cdkVersion: '2.147.0',
    });

    new web.ReactTypeScriptProject({
      parent: this,
      outdir: 'frontend',
      name: 'frontend',
      defaultReleaseBranch: 'main',
    });
  }
}
