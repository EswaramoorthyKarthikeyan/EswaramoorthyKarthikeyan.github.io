import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y
		},
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
				ecmaFeatures: { jsx: true }
			}
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-uses-vars': 'warn',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			...reactPlugin.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...jsxA11y.configs.recommended.rules
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
];
