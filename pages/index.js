import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import ThemeLayout from "../components/ThemeLayout";
import Navbar from "../components/app/Navbar";
import Footer from "../components/app/Footer";
import Hero from "../components/app/Hero";

export default function Home() {

  return (
    <ThemeLayout>
      <Head>
        <title>Tuedon Tuoyo</title>
      </Head>
      <Flex
        flexDir={"column"}
        fontFamily={"Khand"}
        mx={"auto"}
        justifyContent={"space-between"}
        minHeight={"100vh"}
        py="40px"
        width={"full"}
        color="white"
        maxWidth={["100%", "100%", "100%", "85%"]}
      >
       
        <Navbar />
        <Hero />
        <Footer />
      </Flex>
    </ThemeLayout>
  );
}
