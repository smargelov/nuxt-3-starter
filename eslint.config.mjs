import withNuxt from './.nuxt/eslint.config.mjs'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser,
      project: './tsconfig.json',
      extraFileExtensions: ['.vue'],
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    // vue rules
    'vue/no-unused-vars': 'error',
    'vue/html-indent': ['error', 2],
    'vue/multi-word-component-names': 'off',
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'ATTR_DYNAMIC',
          'ATTR_STATIC',
          'ATTR_SHORTHAND_BOOL',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false,
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
      },
    ],

    'vue/no-parsing-error': 'error',
    'vue/no-v-html': 'off',
    'vue/no-ref-as-operand': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/singleline-html-element-content-newline': 'off',

    // common rules
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-console': 'error',
    'no-irregular-whitespace': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex mutations
          'prev', // for reduce acc
          'acc', // for reduce acc
          'e', // for Event
        ],
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-const' },
    ],
    semi: ['error', 'never'],
    indent: 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'arrow-parens': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // import rules
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'off',

    // ts rules
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: 'Type$',
          match: true,
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
  },
})
