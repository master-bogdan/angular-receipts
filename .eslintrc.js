module.exports = {
  settings: {
    angular: {
        version: "detect",
    },
  },
  root: true,
  ignorePatterns: [
    "projects/**/*"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: [
          "tsconfig.json"
        ],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true
      },
      extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-base",
        "airbnb-typescript/base"
      ],
      rules: {
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-param-reassign": "warn",
        "class-methods-use-this": "off",
        "no-console": "warn",
        "import/prefer-default-export": "off",
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      files: [
        "*.html"
      ],
      extends: [
        "plugin:@angular-eslint/template/recommended"
      ],
      // rules: {}
    },
  ]
}
