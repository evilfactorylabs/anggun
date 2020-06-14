/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'

const CSSReset = () => (
  <Global
    styles={theme => css`
      html {
        text-rendering: optimizelegibility;
        font-family: ${theme.fonts.body};
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        line-height: 1.5;
        vertical-align: middle;
      }

      samp,
      code,
      kbd {
        font-family: ${theme.fonts.mono};
      }

      button,
      [role='button'] {
        cursor: pointer;
      }

      p {
        margin: 0;
      }
    `}
  />
)

CSSReset.displayName = 'CSSReset'

export default CSSReset
