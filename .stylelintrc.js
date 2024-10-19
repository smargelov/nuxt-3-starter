export default {
  extends: [
    'stylelint-config-html',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  plugins: [
    'stylelint-order',
    'stylelint-prettier',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    'no-descending-specificity': null,
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
    'prettier/prettier': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['input-placeholder'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['input-placeholder'],
      },
    ],
    'scss/no-global-function-names': null,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
    'selector-no-vendor-prefix': [
      true,
      {
        ignoreSelectors: ['::-webkit-input-placeholder', '/-moz-.*/'],
      },
    ],
    'max-nesting-depth': [
      3,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box'],
      },
    ],
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-|_]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message: (className) =>
          `Class "${className}" does not follow BEM naming convention (Two Dashes style)`,
      },
    ],
  },
}
