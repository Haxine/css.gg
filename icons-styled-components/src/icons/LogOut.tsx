import React from 'react'
import styled from 'styled-components'

const StyledLogOut = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 6px;
    height: 16px;
    border: 2px solid;
    transform: scale(var(--ggs, 1));
    border-right: 0;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    margin-left: -10px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    border-top: 2px solid;
    border-left: 2px solid;
    transform: rotate(-45deg);
    width: 8px;
    height: 8px;
    left: 4px;
    bottom: 2px;
  }
  &::before {
    border-radius: 3px;
    width: 10px;
    height: 2px;
    background: currentColor;
    left: 5px;
    bottom: 5px;
  }
`

export const LogOut = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLogOut {...props} ref={ref} />
    </>
  )
})
