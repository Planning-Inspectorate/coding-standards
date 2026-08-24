import assert from 'node:assert';
import { describe, it } from 'node:test';
import * as exports from './index.js';

describe('index', () => {
	describe('exports', () => {
		it('should export commitlint', () => {
			assert.ok(exports.commitlintConfig);
			assert.strictEqual(typeof exports.commitlintConfig, 'object');
		});
		it('should export eslint', () => {
			assert.ok(exports.eslintConfig);
			assert.strictEqual(typeof exports.eslintConfig, 'object');
			assert.ok(Array.isArray(exports.eslintConfig));
		});
		it('should export prettier', () => {
			assert.ok(exports.prettierConfig);
			assert.strictEqual(typeof exports.prettierConfig, 'object');
		});
		it('should export stylelint', () => {
			assert.ok(exports.stylelintConfig);
			assert.strictEqual(typeof exports.stylelintConfig, 'object');
		});
	});
});
