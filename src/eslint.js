import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import checkFile from 'eslint-plugin-check-file';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtendsArray}
 */
export default [
	{
		files: ['**/*.{js,ts}'],
		extends: [eslint.configs.recommended],
		languageOptions: {
			globals: globals.node
		}
	},
	{
		files: ['**/*.ts'],
		extends: [tseslint.configs.recommended],
		rules: {
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-explicit-any': 'off'
		}
	},
	globalIgnores([
		'.husky',
		'dist/**',
		'node_modules/**',
		'**/*.test.ts',
		'**/*.test.js',
		'**/.static/**',
		'packages/database/src/client/**',
		'*.config.js'
	]),
	eslintConfigPrettier,
	{
		files: ['**/*.{js,ts}'],
		plugins: {
			'check-file': checkFile
		},
		rules: {
			'check-file/filename-naming-convention': [
				'error',
				{
					'**/*.{js,ts}': 'KEBAB_CASE'
				},
				{
					ignoreMiddleExtensions: true
				}
			],
			'check-file/folder-naming-convention': [
				'error',
				{
					'**/*': 'KEBAB_CASE'
				}
			]
		}
	}
];
