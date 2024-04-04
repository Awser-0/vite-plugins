module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-essential",
		// 关闭所有不必要的或可能与Prettier冲突的规则。
		// "eslint-config-prettier",

		"plugin:prettier/recommended",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	// parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "vue"],
	rules: {
		// 未使用变量
		"@typescript-eslint/no-unused-vars": "off",
		// 解决不让用{}类型
		"@typescript-eslint/ban-types": [
			"error",
			{
				extendDefaults: true,
				types: {
					"{}": false,
				},
			},
		],
		// 解决不让用any类型
		"@typescript-eslint/no-explicit-any": ["off"],
	},
};
