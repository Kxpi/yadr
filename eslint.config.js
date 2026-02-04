import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
	js.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: "module"
			}
		},
		plugins: {
			"@typescript-eslint": ts
		},
		rules: {
			...ts.configs.recommended.rules,
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
		}
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				ecmaVersion: 2022,
				sourceType: "module"
			}
		},
		plugins: {
			svelte
		},
		rules: {
			...svelte.configs.recommended.rules,
			"svelte/no-at-html-tags": "off",
			"no-unused-vars": "off"
		}
	},
	{
		ignores: [".svelte-kit/**", "build/**", "node_modules/**", "dist/**", "*.cjs"]
	},
	prettier
];
