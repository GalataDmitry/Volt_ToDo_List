module.exports = {
  'extends': './base.js',
  'rules': {
    '@typescript-eslint/naming-convention': ['error', {
      'selector': 'typeLike',
      'format': ['PascalCase'],
    }, {
      'selector': 'typeParameter',
      'format': ['PascalCase'],
      'suffix': ['Type'],
    }],
    '@typescript-eslint/no-this-alias': [
      'error', {'allowDestructuring': true},
    ],
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/consistent-type-assertions': ['error', {
      'assertionStyle': 'as',
      'objectLiteralTypeAssertions': 'allow-as-parameter',
    }],
  },
}