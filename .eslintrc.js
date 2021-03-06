module.exports = {
  "env": {
    "es6": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    'react/jsx-props-no-spreading': 0,
    "react/prop-types": ["error", { "ignore": ["navigation", "progress"] }],
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          ".jsx",
          ".js"
        ]
      }
    ],
    "import/prefer-default-export": "off"
  }
};
