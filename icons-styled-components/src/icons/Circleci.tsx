import React from 'react'
import styled from 'styled-components'

const StyledCircleci = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
    border-radius: 18px;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 24px;
    border: 4px solid;
    background: linear-gradient(to left, currentColor 8px, transparent 0) no-repeat -2px center/8px 3px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: 3px solid;
    top: 3px;
    right: 3px;
  }
`

export const Circleci = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCircleci {...props} ref={ref} />
    </>
  )
})
