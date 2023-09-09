import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { darkTheme, lightTheme } from "../theme/modes";

const ThemeLayout = ({ children }) => {
  const { colorMode } = useColorMode("dark");
  return (
    <Box
      background={
        colorMode == "light"
          ? `${lightTheme.rootBackground}`
          : `${darkTheme.rootBackground}`
      }
      width={"100%"}
      minHeight="100vh"
      backgroundImage="/assets/svgs/Back.svg"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      overflow="hidden"
      position="relative"
    >
      {/* The main application starts from here */}
      {children}
    </Box>
  );
};

ThemeLayout.propTypes = {};
export default ThemeLayout;
