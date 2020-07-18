/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'

import Box from '../Box'

const Grid = forwardRef(
  (
    {
      children,
      gap,
      columnGap,
      rowGap,
      column,
      row,
      autoFlow,
      autoColumns,
      autoRows,
      templateColumns,
      templateAreas,
      templateRows,
      area,
      ...props
    },
    ref
  ) => (
    <Box
      display="grid"
      ref={ref}
      gridGap={gap}
      gridColumnGap={columnGap}
      gridRowGap={rowGap}
      gridColumn={column}
      gridRow={row}
      gridAutoFlow={autoFlow}
      gridAutoColumns={autoColumns}
      gridAutoRows={autoRows}
      gridTemplateColumns={templateColumns}
      gridTemplateAreas={templateAreas}
      gridTemplateRows={templateRows}
      {...props}
    >
      {children}
    </Box>
  )
)

Grid.displayName = 'Grid'

export default Grid
