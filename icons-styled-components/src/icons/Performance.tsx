import React from 'react'
import styled from 'styled-components'

const StyledPerformance = styled.i`
  & {
    background: linear-gradient(to left, currentColor 8px, transparent 0) no-repeat center/2px 6px;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 100px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    border: 2px solid;
  }
  &::before {
    bottom: 2px;
    width: 2px;
    height: 2px;
    box-sizing: content-box;
    border-radius: 100px;
    left: 6px;
  }
  &::after {
    box-sizing: border-box;
    border-radius: 3px;
    width: 14px;
    height: 8px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    border-bottom: 0;
    top: 2px;
    left: 2px;
  }
`

export const Performance = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPerformance {...props} ref={ref} />
    </>
  )
})
