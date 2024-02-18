// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme/theme'
import "../styles/globals.css"
import '@fontsource/khand'
import '@fontsource/khand/500.css'
import '@fontsource/courier-prime'
import '@fontsource/manrope'
import '@fontsource/manrope/500.css'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp