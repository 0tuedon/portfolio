import { Flex, Heading, Text } from "@chakra-ui/react";
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
                <strong>Tuedon </strong>
              </Text>
              a <strong>SOFTWARE ENGINEER, </strong> combining ease of approach
              with a professional mindset to develop impactful solutions.
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
              I find joy in working with technology, particularly in utilizing
              PHP and JavaScript to develop websites that are easy for users to
              navigate. My focus revolves around ensuring a smooth integration
              between the server side (using PHP) and the interactive components
              (using JavaScript). Recently, I&apos;ve delved into the intriguing
              realm of blockchain engineering, adding a new dimension to my
              technological journey.
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
              I am currently in the process of developing a comprehensive
              event-calendar JavaScript library with the primary objective of
              providing developers with a user-friendly tool to effortlessly
              create and integrate scheduling components into their projects.
              This library is designed to streamline the often complex task of
              incorporating dynamic and interactive event calendars into various
              applications, serving as a valuable resource for developers
              seeking efficient solutions for scheduling functionalities.
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
