import globals from "globals"
import { builtinModules } from "module"

import { fixupPluginRules }   from "eslint-compat"
import stylistic              from "eslint-plugin-stlyistic"
import pluginJavaScript       from "eslint-plugin-javascript"
import pluginReact            from "eslint-plugin-react"
import pluginReactHooks       from "eslint-plugin-react-hooks"
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort"
import pluginTypeScript       from "eslint-plugin-typescript"

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,jsx,tsx}"],
        settings: {
            react: {
                version: "detect"
            }
        },
        languageOptions: {
            globals: globals.browser
        }
    },
    pluginJavaScript.configs.recommended,
    ...pluginTypeScript.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            "react-hooks": fixupPluginRules(pluginReactHooks)
        },
        rules: pluginReactHooks.configs.recommended.rules
    },
    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "react-hooks/exhaustive-deps": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    fixStyle: "separate-type-imports"
                }
            ]
        }
    },
    {
        plugins: {
            "simple-import-sort": pluginSimpleImportSort
        },
        rules: {
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        [
                            `node:`,
                            `^(${builtinModules.join("|")})(/|$)`
                        ],
                        // style less,scss,css
                        ["^.+\\.s?css$"],
                        // Side effect imports.
                        ["^\\u0000"],
                        ["^@?\\w.*\\u0000$", "^[^.].*\\u0000$", "^\\..*\\u0000$"],
                        ["^react", "^@?\\w"],
                        ["^@/"],
                        // Parent imports. Put `..` last.
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        // Other relative imports. Put same-folder imports and `.` last.
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
                    ]
                }
            ]
        }
    },
    // see: https://eslint.style/guide/getting-started
    // see: https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/disable-legacy.ts
    stylistic.configs["disable-legacy"],
    {
        plugins: {
            "@stylistic": stylistic
        },
        rules: {
            ...stylistic.configs.customize({
                indent: 4,
                quotes: "double",
                semi: false,
                commaDangle: "never",

                jsx: true
            }).rules,
            "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
            "@stylistic/indent": ["error", 4, { offsetTernaryExpressions: false }]
        }
    },
    {
        ignores: [
            "**/node_modules",
            "**/dist",
            "**/.*",
            "scripts/**/*.cjs"
        ]
    }
]
