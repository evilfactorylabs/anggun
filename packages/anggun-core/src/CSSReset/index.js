/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'

const CSSReset = () => (
  <Global
    styles={css`
      body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 100%;
        line-height: 1.5;
      }
    `}
  />
)

CSSReset.displayName = 'CSSReset'

export default CSSReset
