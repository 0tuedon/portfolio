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
      <Text  fontSize={"24px"}>Tuedon Tuoyo</Text>

      <Flex gap={["38px"]} fontSize={"20px"} display={["none","none", "flex"]}>
        <NextLink href={"/"}>
          <Link>Work</Link>
        </NextLink>
        <NextLink href={"/"}>
          <Link>About</Link>
        </NextLink>
        <NextLink href={"/"}>
          <Link>Contact</Link>
        </NextLink>
        <Link
          href="https://docs.google.com/document/d/1FJh0Pb7lVs23hKnexaKPyjXhN5eGODlkx1N5FwLcxV0/edit#heading=h.88hjc8sweuxg"
          target="_blank"
        >
          Resume
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
