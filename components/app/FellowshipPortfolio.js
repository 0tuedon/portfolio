import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const VLS = "https://gitlab.com/lightning-signer/validating-lightning-signer/-";

const sections = [
  {
    title: "MERGE REQUESTS CREATED",
    links: [
      { label: "VLS Merge Request !923", href: `${VLS}/merge_requests/923` },
      { label: "VLS Merge Request !945", href: `${VLS}/merge_requests/945` },
    ],
  },
  {
    title: "NEXT STEPS – SIMULATION TESTING AND BENCHMARKING",
    links: [
      { label: "VLS Issue #414", href: `${VLS}/work_items/414` },
      { label: "VLS Issue #380", href: `${VLS}/work_items/380` },
    ],
  },
  {
    title: "VLS – ISSUES INVESTIGATED",
    links: [
      { label: "VLS Issue #391", href: `${VLS}/work_items/391` },
      { label: "VLS Issue #581", href: `${VLS}/work_items/581` },
      { label: "VLS Issue #583", href: `${VLS}/work_items/583` },
    ],
  },
  {
    title: "MERGE REQUESTS REVIEWED",
    links: [
      { label: "VLS Merge Request !933", href: `${VLS}/merge_requests/933` },
      { label: "VLS Merge Request !943", href: `${VLS}/merge_requests/943` },
      {
        label: "VLS Merge Request !946 (review note)",
        href: `${VLS}/merge_requests/946#note_4222566224`,
      },
      {
        label: "VLS Merge Request !937 (review note)",
        href: `${VLS}/merge_requests/937#note_4023323304`,
      },
    ],
  },
  {
    title: "ARTICLES WRITTEN",
    links: [
      {
        label: "So I Thought I Knew About Bitcoin",
        href: "https://medium.com/@tuedontuoyo/so-i-thought-i-knew-about-bitcoin-18b109754852",
      },
      {
        label: "All You Need to Know About Setting Up Your LND Node on Signet",
        href: "https://medium.com/@tuedontuoyo/all-you-need-to-know-about-setting-up-your-lnd-node-on-signet-d10039a56f73",
      },
      {
        label: "Bitcoin Core Coin Selection",
        href: "https://medium.com/@tuedontuoyo/bitcoin-core-coin-selection-c9477b11f2df",
      },
      {
        label: "Bitcoin Coin Selection: How Different Wallets Choose Your UTXOs",
        href: "https://medium.com/@tuedontuoyo/bitcoin-coin-selection-how-different-wallets-choose-your-utxos-b87a674a4fb4",
      },
      {
        label: "Don't Trust, Verify — Even the Signer",
        href: "https://medium.com/@tuedontuoyo/dont-trust-verify-even-the-signer-34bf8803f1b9",
      },
    ],
  },
];

const FellowshipPortfolio = () => {
  return (
    <Flex direction={"column"}>
      <Flex
        flexDirection={"column"}
        paddingY={"32px"}
        borderBottom={"1px solid #FFFFFF1A"}
      >
        <Heading
          fontFamily={"Khand"}
          fontSize={["2.5rem", "3.5rem", "5rem"]}
          fontWeight={600}
        >
          Btrust Fellowship Portfolio
        </Heading>
        <Text fontFamily={"Manrope"}>
          Articles, merge requests, investigations and reviews from my
          fellowship.
        </Text>
      </Flex>

      <Flex
        fontFamily={"Manrope"}
        direction={"column"}
        paddingY={"4rem"}
        gap={"48px"}
        width={["100%", "100%", "70%"]}
      >
        {sections.map((section) => (
          <Flex key={section.title} direction={"column"} gap={"12px"}>
            <Heading color={"#80808078"}>{section.title}</Heading>
            {section.links.map((link) => (
              <Flex key={link.href} direction={"column"}>
                <Link
                  href={link.href}
                  isExternal
                  color={"white"}
                  fontSize={["18px", "18px", "24px"]}
                  fontWeight={500}
                >
                  {link.label} ↗
                </Link>
                <Text
                  color={"#FFFFFF80"}
                  fontSize={"14px"}
                  wordBreak={"break-all"}
                >
                  {link.href}
                </Text>
              </Flex>
            ))}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default FellowshipPortfolio;
