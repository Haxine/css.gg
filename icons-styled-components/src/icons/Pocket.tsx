import React from 'react'
import styled from 'styled-components'

const StyledPocket = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 20px;
    border: 2px solid;
    border-radius: 6px;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 22px;
    width: 8px;
    height: 2px;
    background: currentColor;
    bottom: 7px;
  }
  &::before {
    transform: rotate(-48deg);
    right: 3px;
  }
  &::after {
    transform: rotate(48deg);
    left: 3px;
  }
`

export const Pocket = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPocket {...props} ref={ref} />
    </>
  )
})
