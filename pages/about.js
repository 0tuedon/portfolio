import React from "react";
import ThemeLayout from "../components/ThemeLayout";
import Navbar from "../components/app/Navbar";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import About from "../components/app/About";
import Footer from "../components/app/Footer";

const AboutPage = () => {
  return (
    <ThemeLayout>
      <Head>
        <title>Tuedon Tuoyo About</title>
      </Head>
      <Flex
        flexDir={"column"}
        fontFamily={"Khand"}
        mx={"auto"}
        gap={"40px"}
        minHeight={"100vh"}
        py="40px"
        width={"full"}
        color="white"
        maxWidth={["100%", "100%", "100%", "85%"]}
      >
        <Navbar />
        <About/>
      </Flex>
    </ThemeLayout>
  );
};

export default AboutPage;
