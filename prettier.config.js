/** @type {import('prettier').Config} */
export default {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: false,
  trailingComma: 'none',
  endOfLine: 'lf',
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-tailwindcss' // Must be loaded last
  ],
  printWidth: 100,

  // Tailwind CSS
  tailwindFunctions: ['cn', 'clsx', 'cva', 'tv']
}
