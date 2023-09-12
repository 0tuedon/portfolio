import { Box } from '@chakra-ui/react'
import React from 'react'

const Blur = () => {
  return (
    <Box position={"absolute"} left={["-171px","-254px"]} top="40%" borderRadius={"200px"} width={["280px,","332px"]} height={["280px","332px"]} bg="#FFB35A80" filter={"blur(250px)"}>

    </Box>
  )
}

export default Blur