'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle` 
 * { 
   margin: 0; 
   padding: 0; 
   box-sizing: border-box; 
 } 
 
 html { 
   font-size: 62.5%; /* Isso faz 1rem ser exatamente igual a 10px, facilita muito! */ 
 } 
 
 html, body, #__next { 
   height: 100%; 
 } 
 
 body { 
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
 } 
`

export default GlobalStyles
