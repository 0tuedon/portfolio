import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { darkTheme, lightTheme } from "../theme/modes";

const ThemeLayout = ({ children }) => {
    const {colorMode,toggleColorMode} = useColorMode()
  return (
    <Box
      background={
        colorMode == "light"
          ? `${lightTheme.rootBackground}`
          : `${darkTheme.rootBackground}`
      }
      height={"100vh"}
      width={"100vw"}
      onClick={toggleColorMode}
    >
      {/* The main application starts from here */}
      {children}
    </Box>
  );
};

ThemeLayout.propTypes = {};
export default ThemeLayout;
