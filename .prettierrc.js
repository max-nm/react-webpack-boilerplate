module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  rangeStart: 0,
  parser: 'babel',
  filepath: '',
  requirePragma: false,
  jsxBracketSameLine: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.tsx',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.yml',
      options: {
        parser: 'yaml',
      },
    },
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
  ],
};
