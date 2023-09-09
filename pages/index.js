import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import ThemeLayout from "../components/ThemeLayout";

export default function Home() {
  return (
    <ThemeLayout>
      <Head>
        <title>Tuedon Tuoyo</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        justifyContent="space-between"
        padding={["2.5rem 1rem", "2.5rem 7.44rem"]}
      >
        <Image src="/assets/svgs/logo.svg" alt="logo" width={118} height={29} />
        <Flex
          gap={["1rem", "2.38rem"]}
          as="ul"
          fontFamily={`"Khand", sans-serif`}
        >
          <NextLink href="mailto:tuedontuoyo@gmail.com" passHref>
            <Link
              display={{ base: "hidden", md: "inline-block" }}
              fontSize={"0.95rem"}
              fontWeight={500}
              color="#fff"
            >
              Contact
            </Link>
          </NextLink>
          <NextLink href="#" download passHref>
            <Link color="#fff" fontSize={"0.95rem"} fontWeight={500}>
              Resume
            </Link>
          </NextLink>
        </Flex>
      </Flex>

      <Box
        as="main"
        position="relative"
        minHeight="100vh"
        width="100%"
        color="#fff"
        display="grid"
        placeContent={"center"}
        paddingBottom="10"
      >
        <Center
          backgroundImage="/assets/svgs/FloatingTexts.svg"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat={"no-repeat"}
          w="76rem"
          h="41rem"
          maxW="100%"
        >
          <Box>
            <Box as="div" textAlign={"center"} mb="4.69rem">
              <Heading
                fontSize={["3rem", "4rem"]}
                fontWeight={500}
                mb={"0.75rem"}
              >
                Hi,{" "}
                <Box as="span" color="#FFB35A">
                  Tueddy
                </Box>{" "}
                here
              </Heading>
              <Heading
                fontSize={["2rem", "2.25rem"]}
                fontWeight={400}
                mb={"1.75rem"}
              >
                Frontend Engineer
              </Heading>
              <Text
                fontSize={["0.875rem", "1rem"]}
                fontWeight={400}
                color={"#8B8B8B"}
                letterSpacing={"-0.01rem"}
              >
                Let&apos;s discuss that next project and get your product
                running
              </Text>
            </Box>
            <Center>
              <Link
                borderRadius={"1.875rem"}
                padding="1rem 2.25rem"
                background="#FFB35A"
                href="mailto:tuedontuoyo@gmail.com"
                sx={{
                  _hover: {
                    background: "#FFB35A",
                  },
                }}
              >
                <Text
                  textAlign="center"
                  fontSize="1rem"
                  fontWeight={600}
                  letterSpacing={"-0.015rem"}
                  color="#000600"
                >
                  Contact Me
                </Text>
              </Link>
            </Center>
          </Box>
        </Center>
      </Box>
    </ThemeLayout>
  );
}
