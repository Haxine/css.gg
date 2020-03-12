import React from 'react'
import styled from 'styled-components'

const StyledSmartphoneRam = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 26px;
    height: 14px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 2px;
    background: currentColor;
    box-shadow: 16px 4px 0;
    top: 2px;
    left: 2px;
  }
  &::after {
    box-shadow: 4px 0 0, 8px 0 0, 12px 0 0, 16px 0 0, 0 18px 0, 4px 18px 0, 8px 18px 0, 12px 18px 0,
      16px 18px 0;
    top: -5px;
  }
`

export const SmartphoneRam = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSmartphoneRam {...props} ref={ref} />
    </>
  )
})
