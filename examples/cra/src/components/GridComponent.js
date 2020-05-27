import React from 'react'
import { Grid, Box } from '@evilfactory/anggun'

function GridComponent() {
  return (
    <Grid autoFlow='column' columnGap={3}>
      <Grid rowGap={4}>
        <Box bg='warning'>Grid</Box>
        <Box bg='warning'>Grid</Box>
        <Box bg='warning'>Grid</Box>
      </Grid>
      <Grid autoFlow='column' columnGap={4}>
        <Box bg='warning'>Grid</Box>
        <Box bg='warning'>Grid</Box>
        <Box bg='warning'>Grid</Box>
      </Grid>
    </Grid>
  )
}

export default GridComponent
