import antfu from "@antfu/eslint-config"

export default antfu(
  {
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: "double", // or 'double'
    },
    // TypeScript and Vue are auto-detected, you can also explicitly enable them:
    typescript: true,
    vue: true,
    react: true,

    // Disable jsonc and yaml support
    jsonc: false,
    yaml: false,

    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      "**/fixtures",
    // ...globs
    ],
  },
  {
    rules: {
    },
  },
)
