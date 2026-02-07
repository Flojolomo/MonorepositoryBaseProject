import { describe, test, expect } from "@jest/globals";
import { synthSnapshot } from "projen/lib/util/synth";
import { MonorepoProject } from "../src";

describe("MyMonorepoProject", () => {
  const option = {
    name: "my-monorepo",
    repository: "https://github.com/example/my-monorepo.git",
  };
  test("creates project with correct configuration", () => {
    const project = new MonorepoProject({ ...option, name: "monorepo-base-project" });
    expect(project.name).toBe("monorepo-base-project");
    expect(project.package.packageManager).toBe("pnpm");
  });

  test("creates infrastructure subproject", () => {
    const project = new MonorepoProject(option);
    const infra = project.subprojects.find((p) => p.name === "infrastructure");
    expect(infra).toBeDefined();
    expect(infra?.outdir).toContain("infrastructure");
  });

  test("creates frontend subproject", () => {
    const project = new MonorepoProject(option);
    const frontend = project.subprojects.find((p) => p.name === "frontend");
    expect(frontend).toBeDefined();
    expect(frontend?.outdir).toContain("frontend");
  });

  test("synthesizes correctly", () => {
    const project = new MonorepoProject(option);
    const snapshot = synthSnapshot(project);
    expect(snapshot["package.json"]).toBeDefined();
  });
});
