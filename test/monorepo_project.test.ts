import { describe, test, expect } from '@jest/globals';
import { synthSnapshot } from 'projen/lib/util/synth';
import { MyMonorepoProject } from '../src';

describe('MyMonorepoProject', () => {
  test('creates project with correct configuration', () => {
    const project = new MyMonorepoProject();
    expect(project.name).toBe('monorepo-base-project');
    expect(project.package.packageManager).toBe('yarn_berry');
  });

  test('creates infrastructure subproject', () => {
    const project = new MyMonorepoProject();
    const infra = project.subprojects.find((p) => p.name === 'infrastructure');
    expect(infra).toBeDefined();
    expect(infra?.outdir).toContain('infrastructure');
  });

  test('creates frontend subproject', () => {
    const project = new MyMonorepoProject();
    const frontend = project.subprojects.find((p) => p.name === 'frontend');
    expect(frontend).toBeDefined();
    expect(frontend?.outdir).toContain('frontend');
  });

  test('synthesizes correctly', () => {
    const project = new MyMonorepoProject();
    const snapshot = synthSnapshot(project);
    expect(snapshot['package.json']).toBeDefined();
  });
});
