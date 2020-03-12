import React from 'react'
import styled from 'styled-components'

const StyledLockUnlock = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 6px;
    border: 2px solid;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    border-bottom: transparent;
    margin-top: -18px;
    margin-left: -2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    width: 16px;
    height: 10px;
    border-radius: 2px;
    left: -4px;
    top: 10px;
  }
  &::before {
    width: 2px;
    height: 6px;
    background: currentColor;
    left: -2px;
    top: 4px;
  }
`

export const LockUnlock = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLockUnlock {...props} ref={ref} />
    </>
  )
})
