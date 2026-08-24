# Coding standards

This repository is for common tooling configuration and associated files, relating to Planning Inspectorate coding standards.

## Usage

First, install via npm

`npm install --save-dev @planning-inspectorate/coding-standards`

Also ensure any other requirements are met, which vary. The requirements are:

| Package    | Requirements                                                                                                                                                                                   |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| commitlint | <ul><li>@commitlint/cli</li><li>@commitlint/config-conventional</li></ul>                                                                                                                      |
| eslint     | <ul><li>@eslint/js</li><li>eslint</li><li>eslint-config-prettier</li><li>eslint-plugin-check-file</li><li>globals</li><li>typescript-eslint</li></ul>                                          |
| prettier   | <ul><li>prettier-plugin-organize-imports</li><li>prettier-plugin-prisma</li></ul>                                                                                                              |
| stylelint  | <ul><li>stylelint</li><li>stylelint-config-prettier-scss</li><li>stylelint-config-recess-order</li><li>stylelint-config-standard-scss</li><li>stylelint-order</li><li>stylelint-scss</li></ul> |

Then import and use where needed, for example:

`eslint.config.js`

```javascript
import { defineConfig } from 'eslint/config';
import { eslintConfig } from '@planning-inspectorate/coding-standards';

export default defineConfig(eslintConfig);
```

### Overrides

There are always exceptions (but they should be minimised). To override the defaults, simply spread them and override as necessary. Eslint is an array, and most of the others are an object.

`eslint.config.js`

```javascript
import { defineConfig } from 'eslint/config';
import { eslintConfig } from '@planning-inspectorate/coding-standards';

export default defineConfig([
	...eslintConfig,
	{
		rules: {
			// be more stict and don't allow 'any'
			'@typescript-eslint/no-explicit-any': 'error'
		}
	}
]);
```

`prettier.config.js`

```javascript
import { prettierConfig } from '@planning-inspectorate/coding-standards';

export default {
	...prettierConfig,
	printWidth: 140
};
```

## Contributing

Commits must follow conventional commits, and the commit types will be used by semantic-release to determine the next version number. For example `feat` commits will result in a minor version bump, while `fix` commits will result in a patch version bump.

The package will be released automatically using semantic-release, on merge to main. This will include a git tag for the release, and publishing to NPM.
