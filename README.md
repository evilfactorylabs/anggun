> NOTE: THIS PACKAGE IS NOT STABLE YET

Anggun is a design system. Anggun itself (in Indonesian) means elegant, graceful, neat, you name it

## Quick Demo

Go to [https://anggun.now.sh/](https://anggun.now.sh/)

## Installation

```
# yarn
yarn add @evilfactory/anggun-core

# npm
npm i @evilfactory/anggun-core
```

## Usage

You need to wrap your components with `ThemeProvider` and add `CSSReset` to reset browser styles and make sure the component works correctly

```jsx
import { ThemeProvider, CSSReset } from '@evilfactory/anggun-core'

const App = () => (
  <ThemeProvider>
    <CSSReset />

    {/* your components here */}
  </ThemeProvider>
)

export default App
```

## Maintainers

- Kevin Anantha - [kevanantha](https://github.com/kevanantha)
- Adysurya - [ri7nz](https://github.com/ri7nz)

## LICENSE

[MIT](https://github.com/evilfactorylabs/anggun/blob/master/LICENSE)
