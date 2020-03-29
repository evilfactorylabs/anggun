/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import defaultTheme from '../theme'

// const ThemeProvider = ({ children, ...props }) => createElement(ThemeProvider, props, children)

const ThemeProvider = ({ children, theme }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
)

ThemeProvider.defaultProps = {
  theme: defaultTheme
}

export default ThemeProvider
