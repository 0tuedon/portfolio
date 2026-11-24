import React from "react";
import ThemeLayout from "../components/ThemeLayout";
import Navbar from "../components/app/Navbar";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import FellowshipPortfolio from "../components/app/FellowshipPortfolio";

const title = "Tuedon Tuoyo – Btrust Fellowship Portfolio";
const description =
  "My Btrust fellowship work on VLS (Validating Lightning Signer): merge requests, issues investigated, reviews, a presentation and articles.";

const BtrustFellowshipPortfolioPage = () => {
  return (
    <ThemeLayout>
      <Head>
        <title>Tuedon Tuoyo Btrust Fellowship Portfolio</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
        <FellowshipPortfolio />
      </Flex>
    </ThemeLayout>
  );
};

export default BtrustFellowshipPortfolioPage;
