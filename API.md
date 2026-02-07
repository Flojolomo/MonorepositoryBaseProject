# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonorepoProject <a name="MonorepoProject" id="@flocoder93/base-project.MonorepoProject"></a>

#### Initializers <a name="Initializers" id="@flocoder93/base-project.MonorepoProject.Initializer"></a>

```typescript
import { MonorepoProject } from '@flocoder93/base-project'

new MonorepoProject(options: MonorepoProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@flocoder93/base-project.MonorepoProject.Initializer.parameter.options">options</a></code> | <code><a href="#@flocoder93/base-project.MonorepoProjectOptions">MonorepoProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@flocoder93/base-project.MonorepoProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@flocoder93/base-project.MonorepoProjectOptions">MonorepoProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@flocoder93/base-project.MonorepoProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@flocoder93/base-project.MonorepoProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@flocoder93/base-project.MonorepoProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@flocoder93/base-project.MonorepoProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@flocoder93/base-project.MonorepoProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@flocoder93/base-project.MonorepoProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@flocoder93/base-project.MonorepoProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@flocoder93/base-project.MonorepoProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@flocoder93/base-project.MonorepoProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@flocoder93/base-project.MonorepoProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@flocoder93/base-project.MonorepoProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@flocoder93/base-project.MonorepoProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@flocoder93/base-project.MonorepoProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@flocoder93/base-project.MonorepoProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@flocoder93/base-project.MonorepoProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@flocoder93/base-project.MonorepoProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@flocoder93/base-project.MonorepoProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@flocoder93/base-project.MonorepoProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@flocoder93/base-project.MonorepoProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@flocoder93/base-project.MonorepoProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@flocoder93/base-project.MonorepoProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@flocoder93/base-project.MonorepoProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@flocoder93/base-project.MonorepoProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@flocoder93/base-project.MonorepoProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@flocoder93/base-project.MonorepoProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@flocoder93/base-project.MonorepoProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@flocoder93/base-project.MonorepoProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@flocoder93/base-project.MonorepoProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@flocoder93/base-project.MonorepoProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@flocoder93/base-project.MonorepoProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@flocoder93/base-project.MonorepoProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@flocoder93/base-project.MonorepoProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@flocoder93/base-project.MonorepoProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@flocoder93/base-project.MonorepoProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@flocoder93/base-project.MonorepoProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@flocoder93/base-project.MonorepoProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@flocoder93/base-project.MonorepoProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@flocoder93/base-project.MonorepoProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@flocoder93/base-project.MonorepoProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@flocoder93/base-project.MonorepoProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@flocoder93/base-project.MonorepoProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@flocoder93/base-project.MonorepoProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@flocoder93/base-project.MonorepoProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@flocoder93/base-project.MonorepoProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@flocoder93/base-project.MonorepoProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@flocoder93/base-project.MonorepoProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@flocoder93/base-project.MonorepoProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@flocoder93/base-project.MonorepoProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@flocoder93/base-project.MonorepoProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@flocoder93/base-project.MonorepoProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@flocoder93/base-project.MonorepoProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@flocoder93/base-project.MonorepoProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@flocoder93/base-project.MonorepoProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@flocoder93/base-project.MonorepoProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@flocoder93/base-project.MonorepoProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@flocoder93/base-project.MonorepoProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@flocoder93/base-project.MonorepoProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@flocoder93/base-project.MonorepoProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@flocoder93/base-project.MonorepoProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@flocoder93/base-project.MonorepoProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@flocoder93/base-project.MonorepoProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@flocoder93/base-project.MonorepoProject.isConstruct"></a>

```typescript
import { MonorepoProject } from '@flocoder93/base-project'

MonorepoProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@flocoder93/base-project.MonorepoProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@flocoder93/base-project.MonorepoProject.isProject"></a>

```typescript
import { MonorepoProject } from '@flocoder93/base-project'

MonorepoProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@flocoder93/base-project.MonorepoProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@flocoder93/base-project.MonorepoProject.of"></a>

```typescript
import { MonorepoProject } from '@flocoder93/base-project'

MonorepoProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@flocoder93/base-project.MonorepoProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |

---

##### `node`<sup>Required</sup> <a name="node" id="@flocoder93/base-project.MonorepoProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@flocoder93/base-project.MonorepoProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@flocoder93/base-project.MonorepoProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@flocoder93/base-project.MonorepoProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@flocoder93/base-project.MonorepoProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@flocoder93/base-project.MonorepoProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@flocoder93/base-project.MonorepoProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@flocoder93/base-project.MonorepoProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@flocoder93/base-project.MonorepoProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@flocoder93/base-project.MonorepoProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@flocoder93/base-project.MonorepoProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@flocoder93/base-project.MonorepoProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@flocoder93/base-project.MonorepoProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@flocoder93/base-project.MonorepoProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@flocoder93/base-project.MonorepoProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@flocoder93/base-project.MonorepoProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@flocoder93/base-project.MonorepoProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@flocoder93/base-project.MonorepoProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@flocoder93/base-project.MonorepoProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@flocoder93/base-project.MonorepoProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@flocoder93/base-project.MonorepoProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@flocoder93/base-project.MonorepoProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@flocoder93/base-project.MonorepoProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@flocoder93/base-project.MonorepoProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@flocoder93/base-project.MonorepoProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@flocoder93/base-project.MonorepoProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@flocoder93/base-project.MonorepoProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@flocoder93/base-project.MonorepoProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@flocoder93/base-project.MonorepoProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@flocoder93/base-project.MonorepoProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@flocoder93/base-project.MonorepoProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@flocoder93/base-project.MonorepoProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@flocoder93/base-project.MonorepoProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@flocoder93/base-project.MonorepoProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@flocoder93/base-project.MonorepoProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@flocoder93/base-project.MonorepoProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@flocoder93/base-project.MonorepoProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@flocoder93/base-project.MonorepoProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@flocoder93/base-project.MonorepoProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@flocoder93/base-project.MonorepoProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@flocoder93/base-project.MonorepoProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@flocoder93/base-project.MonorepoProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@flocoder93/base-project.MonorepoProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@flocoder93/base-project.MonorepoProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@flocoder93/base-project.MonorepoProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@flocoder93/base-project.MonorepoProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@flocoder93/base-project.MonorepoProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@flocoder93/base-project.MonorepoProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@flocoder93/base-project.MonorepoProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@flocoder93/base-project.MonorepoProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@flocoder93/base-project.MonorepoProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@flocoder93/base-project.MonorepoProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@flocoder93/base-project.MonorepoProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@flocoder93/base-project.MonorepoProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@flocoder93/base-project.MonorepoProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

## Structs <a name="Structs" id="Structs"></a>

### MonorepoProjectOptions <a name="MonorepoProjectOptions" id="@flocoder93/base-project.MonorepoProjectOptions"></a>

#### Initializer <a name="Initializer" id="@flocoder93/base-project.MonorepoProjectOptions.Initializer"></a>

```typescript
import { MonorepoProjectOptions } from '@flocoder93/base-project'

const monorepoProjectOptions: MonorepoProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@flocoder93/base-project.MonorepoProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProjectOptions.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@flocoder93/base-project.MonorepoProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@flocoder93/base-project.MonorepoProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@flocoder93/base-project.MonorepoProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `defaultReleaseBranch`<sup>Optional</sup> <a name="defaultReleaseBranch" id="@flocoder93/base-project.MonorepoProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@flocoder93/base-project.MonorepoProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---



