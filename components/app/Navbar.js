import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      width={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      color="white"
      fontWeight={500}
    >
      <Text fontSize={"24px"}>Tuedon Tuoyo</Text>

      <Flex gap={["38px"]} fontSize={"20px"} display={["none", "none", "flex"]}>
        <NextLink href={"/about"}>
          <Link>About</Link>
        </NextLink>
        <Link href="/tuedon-cv.pdf" download>
          Resume
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
