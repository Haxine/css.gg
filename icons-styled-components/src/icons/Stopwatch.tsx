import React from 'react'
import styled from 'styled-components'

const StyledStopwatch = styled.i`
  & {
    background: linear-gradient(to left, currentColor 7px, transparent 0) no-repeat 6px 2px/2px 6px;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border-radius: 100%;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 4px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    right: -4px;
    top: -3px;
  }
`

export const Stopwatch = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledStopwatch {...props} ref={ref} />
    </>
  )
})
