import React from 'react'
import styled from 'styled-components'

const StyledMenuBoxed = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border-radius: 3px;
    border: 2px solid;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 3px;
    top: 2px;
    left: 2px;
    box-shadow: 0 4px 0, 0 8px 0;
  }
`

export const MenuBoxed = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuBoxed {...props} ref={ref} />
    </>
  )
})
