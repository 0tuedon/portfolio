import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Flex direction={"column"}>
      <Flex
        flexDirection={"column"}
        paddingY={"32px"}
        borderBottom={"1px solid #FFFFFF1A"}
      >
        <Heading fontFamily={"Khand"} fontSize={["2.5rem","3.5rem","5rem"]} fontWeight={600}>
          A little bit about me
        </Heading>
        <Text fontFamily={"Manrope"}>
          Who I am, what I do and what I am currently working on.
        </Text>
      </Flex>

      {/* Bio part */}

      <Flex
        fontFamily={"Manrope"}
        direction={["column", "column", "row"]}
        paddingY={"4rem"}
        alignItems={"start"}
      >
        <Flex direction={"column"} width={["100%", "100%", "70%"]} gap={"48px"} paddingBottom={"24px"}>
          <Flex
            direction={"column"}
            width={"100%"}
            maxWidth={["100%", "100%", "80%"]}
          >
            <Heading color={"#80808078"}>WHO I AM</Heading>
            <Text
              color={"white"}
              fontSize={["18px", "18px", "24px"]}
              textAlign={["left", "left", "justify"]}
            >
              I’m{" "}
              <Text as={"span"} fontWeight={500} color={"white"}>
                <strong>Tuedon</strong>
              </Text>
              , a <strong>SOFTWARE ENGINEER</strong> with over five years of
              experience. I&apos;ve also been involved in the Bitcoin space,
              building tools that help developers learn and understand Bitcoin.
            </Text>
          </Flex>

          <Flex
            direction={"column"}
            width={"100%"}
            maxWidth={["100%", "100%", "80%"]}
            textAlign={["left", "left", "justify"]}
          >
            <Heading color={"#80808078"}>WHAT I DO</Heading>
            <Text color={"white"} fontSize={["18px", "18px", "24px"]}>
              I build software and dig into how Bitcoin and Lightning work
              under the hood. Through the Btrust fellowship, I contributed to
              VLS (Validating Lightning Signer): fixing bugs, investigating
              issues, reviewing merge requests, and writing about what I
              learned, from coin selection to running a Lightning node on
              Signet.
            </Text>
          </Flex>

          <Flex
            direction={"column"}
            width={"100%"}
            maxWidth={["100%", "100%", "80%"]}
            textAlign={["left", "left", "justify"]}
          >
            <Heading color={"#80808078"}>WHAT I CURRENTLY WORK ON</Heading>
            <Text color={"white"} fontSize={["18px", "18px", "24px"]}>
              I&apos;m continuing to contribute to VLS, starting with
              simulation testing: simulating large amounts of Lightning
              activity to see how VLS performs under hundreds or thousands of
              channels and signing requests. See my{" "}
              <NextLink href={"/btrust-fellow"} passHref>
                <Link textDecoration={"underline"}>
                  Btrust fellowship portfolio
                </Link>
              </NextLink>{" "}
              for everything I worked on.
            </Text>
          </Flex>
        </Flex>
        <Flex position={"sticky"} top={"30px"}>
          <Image
            src={"/profile-pics.jpg"}
            width={400}
            height={300}
            alt="An Image of Tuedon"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
