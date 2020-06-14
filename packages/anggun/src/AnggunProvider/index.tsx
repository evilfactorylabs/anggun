/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import defaultTheme from '../theme'

const AnggunProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
)

AnggunProvider.defaultProps = {
  theme: defaultTheme
}

export default AnggunProvider
