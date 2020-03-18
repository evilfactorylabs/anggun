import { createElement } from 'react'
import { ThemeProvider } from 'emotion-theming'
import defaultTheme from '../theme'

const Theme = ({ children, ...props }) => createElement(ThemeProvider, props, children)

Theme.defaultProps = {
  theme: defaultTheme
}

export default Theme
