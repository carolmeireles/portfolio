import styled from 'styled-components'
import { ThemeDark } from '../../themes/dark'
import { ThemeLight } from '../../themes/light'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-height: 22px;
`
