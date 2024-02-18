import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { darkTheme, lightTheme } from "../theme/modes";
import Blur from "./others/Blur";

const ThemeLayout = ({ children }) => {
  const { colorMode } = useColorMode("dark");
  return (
    <Box
      background={`${darkTheme.rootBackground}`}
      width={"100%"}
      minHeight={"100vh"}
      maxHeight={"100vh"}
      mx="auto"
      px={['24px',"24px","24px","24px",0]}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      overflow="scroll"
      position="relative"
    >
      <Blur />
      {children}
    </Box>
  );
};

ThemeLayout.propTypes = {};
export default ThemeLayout;
