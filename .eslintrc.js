module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'prettier/@typescript-eslint', // add prettier rules to eslint
    'plugin:prettier/recommended', // add the plugin that integrates eslint with prettier
    'plugin:react/recommended',
    'plugin:react-redux/recommended',
  ],
  plugins: [
    'import',
    'json',
    'json-format',
    'jsx-a11y',
    'promise',
    'react',
    'react-redux',
    'react-hooks',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    modules: true,
    // "allowImportExportEverywhere": true,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      arrowFunctions: true,
      binaryLiterals: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      octalLiterals: true,
      regexUFlag: true,
      regexYFlag: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
      unicodeCodePointEscapes: true,
      globalReturn: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'import/first': 'error',
    'prettier/prettier': ['error', { singleQuote: true }],
    'comma-dangle': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'implicit-arrow-linebreak': 'off',
    'class-methods-use-this': 0,
    'import/extensions': 0,

    // React
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/self-closing-comp': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-deprecated': 1,
    'react/jsx-closing-tag-location': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    'react/prop-types': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],

    // Best Practices

    // Allowed a getter without setter, but all setters require getters
    'accessor-pairs': [
      'error',
      {
        getWithoutSet: false,
        setWithoutGet: true,
      },
    ],
    'block-scoped-var': 1,
    'consistent-return': 'error',
    'default-case': 1,
    // the dot goes with the property when doing multiline
    'dot-location': [1, 'property'],
    'dot-notation': 1,
    'guard-for-in': 1,
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 1,
    'no-div-regex': 1,
    'no-else-return': 1,
    'no-empty-pattern': 1,
    'no-eq-null': 1,
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 1,
    'no-floating-decimal': 1,
    'no-implicit-coercion': [
      1,
      {
        boolean: true,
        number: true,
        string: true,
      },
    ],
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 1,
    'no-lone-blocks': 1,
    'no-loop-func': 'error',
    'no-multi-str': 1,
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-process-env': 1,
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-void': 1,
    // Produce 1ings when something is commented as TODO or FIXME
    'no-1ing-comments': [
      0,
      {
        terms: ['TODO', 'FIXME'],
        location: 'start',
      },
    ],
    'no-with': 1,
    'vars-on-top': 'error',
    // Enforces the style of wrapped functions
    'wrap-iife': ['error', 'outside'],

    // Possible "error"s (overrides from recommended set)
    'no-console': 'off',
    'no-unreachable': 1,
    'no-extra-boolean-cast': 0,
    'no-restricted-syntax': 0,
    'no-mixed-operators': 0,
    'no-underscore-dangle': 1,
    'function-paren-newline': 0,
    'no-extra-parens': 'error',
    'no-unexpected-multiline': 'error',
    // All JSDoc comments must be valid
    'valid-jsdoc': [
      'error',
      {
        requireReturn: false,
        requireReturnDescription: false,
        requireParamDescription: true,
        prefer: {
          return: 'returns',
        },
      },
    ],

    // Variables
    'init-declarations': ['error', 'always'],
    'no-catch-shadow': 1,
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 1,
    // We require all vars to be initialized (see init-declarations)
    // If we NEED a var to be initialized to undefined, it needs to be explicit
    'no-undef-init': 0,
    'no-undef': 'off',
    'no-undefined': 0,
    'no-unused-vars': 0,
    // Disallow hoisting - let & const don"t allow hoisting anyhow
    'no-use-before-define': 'off',

    // Node.js and CommonJS
    'callback-return': [1, ['callback', 'next']],
    'global-require': 'error',
    'handle-callback-err': 1,
    'no-mixed-requires': 1,
    'no-new-require': 'error',
    // Use path.concat instead
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 0,
    'no-sync': 1,

    // ECMAScript 6 support
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', 'before'],
    'no-confusing-arrow': 'error',
    'no-constant-condition': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'no-var': 1,
    'object-shorthand': [1, 'never'],
    'prefer-arrow-callback': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'require-yield': 'error',

    // Stylistic - everything here is a 1ing because of style.
    'array-bracket-spacing': [0, 'always'],
    'block-spacing': [1, 'always'],
    'brace-style': [
      1,
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    // "camelcase": 1,
    'comma-spacing': [
      1,
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [1, 'last'],
    'computed-property-spacing': [1, 'never'],
    'consistent-this': [1, 'self'],
    'eol-last': 1,
    'func-names': 1,
    'func-style': [0, 'declaration'],
    'id-length': [
      1,
      {
        min: 1,
        max: 32,
      },
    ],
    'jsx-quotes': [1, 'prefer-double'],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
      1,
      {
        beforeBlockComment: true,
      },
    ],
    'max-depth': [1, 8],
    'max-len': [
      1,
      80,
      2,
      {
        ignoreComments: true,
      },
    ],
    'max-nested-callbacks': [1, 8],
    'max-params': [1, 8],
    'new-cap': 1,
    'new-parens': 1,
    'no-array-constructor': 1,
    'no-bitwise': 0,
    'no-continue': 0,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multiple-empty-lines': 1,
    'no-negated-condition': 0,
    'no-nested-ternary': 1,
    'no-new-object': 1,
    'no-plusplus': 0,
    'no-spaced-func': 1,
    'no-ternary': 0,
    'no-trailing-spaces': 1,
    'no-unneeded-ternary': 1,
    'object-curly-spacing': [1, 'always'],
    'one-var': 0,
    'operator-assignment': [1, 'never'],
    'operator-linebreak': [1, 'after'],
    'padded-blocks': [1, 'never'],
    'quote-props': [1, 'consistent-as-needed'],
    'require-jsdoc': [
      0,
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    'semi-spacing': [
      1,
      {
        before: false,
        after: true,
      },
    ],
    'sort-vars': 0,
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': [1, 'never'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': [
      1,
      {
        int32Hint: true,
      },
    ],
    'space-unary-ops': 'error',
    'spaced-comment': [1, 'always'],
    'wrap-regex': 1,
  },

  settings: {
    'import/extension': ['.js', '.jsx', '.tsx'],
    'import/resolver': 'webpack',
  },
};
