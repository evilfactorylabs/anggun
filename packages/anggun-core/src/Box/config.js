import { system } from 'styled-system'

const config = {
  rounded: {
    property: 'borderRadius',
    scale: 'radii'
  },
  height: {
    property: 'height',
    scale: 'sizes'
  }
}

const extraConfig = system(config)

export default extraConfig
