import { Box, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import ThemeLayout from '../components/ThemeLayout'
import styles from '../styles/Home.module.css'
import { darkTheme, lightTheme } from '../theme/modes'

export default function Home() {
  const {colorMode,toggleColorMode} = useColorMode()
  
  return (
    <ThemeLayout>
      Hi
    </ThemeLayout>
  )
}
