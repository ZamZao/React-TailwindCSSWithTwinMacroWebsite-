import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }

  h1 {
    ${tw`
    text-5xl
    pr-0
    pl-0
    text-white
    font-sans
    font-bold
    md:(
        text-7xl
    )`}
    
  }

  h2 {
    ${tw`
    text-4xl
    pr-0
    pl-0
    text-black
    text-center
    font-sans
    font-bold
    md:(
        text-6xl
    )`}
    
  }

`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles