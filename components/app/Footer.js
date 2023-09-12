import { Flex, Text, Link } from "@chakra-ui/layout";
import React from "react";

const Footer = () => {
  return (
    <Flex w={"full"} justifyContent={"center"}>
      <Text>
        Design by{" "}
        <Link className="font-medium !text-[#FFB35A]" href="https://twitter.com/nobleugorji" target="_blank">
          Noble XD{" "}
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
