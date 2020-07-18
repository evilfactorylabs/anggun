import React from 'react'
import { DecoratorFn } from '@storybook/react'

import AnggunProvider from '../../AnggunProvider'
import CSSReset from '../../CSSReset'

const ProviderWrapper: DecoratorFn = storyFn => (
  <AnggunProvider>
    <CSSReset />
    {storyFn()}
  </AnggunProvider>
)

export default ProviderWrapper
