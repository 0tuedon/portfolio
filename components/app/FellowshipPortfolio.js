import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const VLS = "https://gitlab.com/lightning-signer/validating-lightning-signer/-";

const contacts = [
  { label: "GitHub", href: "https://github.com/0tuedon" },
  { label: "GitLab", href: "https://gitlab.com/0tuedon" },
  { label: "Medium", href: "https://medium.com/@tuedontuoyo" },
];

const sections = [
  {
    title: "MERGE REQUESTS CREATED",
    links: [
      {
        label: "VLS Merge Request !923",
        href: `${VLS}/merge_requests/923`,
        tldr: "My first contribution. While setting up LDK and VLS together on regtest, I noticed the lnrod CLI help command only showed a one-line description, so I fixed it. ACKed by Gideon and merged by Sulaiman.",
      },
      {
        label: "VLS Merge Request !945",
        href: `${VLS}/merge_requests/945`,
        tldr: (
          <>
            Fixes issue{" "}
            <Link
              href={`${VLS}/work_items/583`}
              isExternal
              textDecoration={"underline"}
            >
              #583
            </Link>
            . VLS isn&apos;t only a signer; it also tracks its own state. If a
            request fails partway through, leftover changes could leave VLS and
            the Lightning node out of sync. This fix stops those stranded
            mutations, and it made me think hard about the edge cases.
          </>
        ),
      },
    ],
  },
  {
    title: "NEXT STEPS – SIMULATION TESTING AND BENCHMARKING",
    links: [
      {
        label: "VLS Issue #414",
        href: `${VLS}/work_items/414`,
        tldr: "Enterprise scaling: explore audit capabilities for VLS that let enterprises and regulated entities track Lightning activity, verify balances, and access detailed transaction and signing records for compliance, transparency, and accounting.",
      },
      {
        label: "VLS Issue #380",
        href: `${VLS}/work_items/380`,
        tldr: "Simulation testing, where I'm starting first: simulate large amounts of Lightning activity with SimLN to see how VLS performs under hundreds or thousands of channels and signing requests, find where it struggles, and possibly build a tool that generates these scenarios and measures performance.",
      },
    ],
  },
  {
    title: "VLS – ISSUES INVESTIGATED",
    links: [
      {
        label: "VLS Issue #391",
        href: `${VLS}/work_items/391`,
        tldr: "Came up in a PR I reviewed. When opening a channel, CLN sends the index derived from the address, but VLS didn't use it in enforcing mode. I reproduced this using Polar and custom images.",
      },
      {
        label: "VLS Issue #581",
        href: `${VLS}/work_items/581`,
        tldr: "Checked whether the policies were actually enforced. Only enforce_balance could be, and even that wasn't truly enforced because of a bug I found.",
      },
      {
        label: "VLS Issue #583",
        href: `${VLS}/work_items/583`,
        tldr: (
          <>
            Mutations could be left stranded when a request going through VLSD
            fails. Fixed by my MR{" "}
            <Link
              href={`${VLS}/merge_requests/945`}
              isExternal
              textDecoration={"underline"}
            >
              !945
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    title: "MRS & PRS REVIEWED",
    links: [
      {
        label: "VLS Merge Request !933",
        href: `${VLS}/merge_requests/933`,
        tldr: "Reviewed with my test results and the CLN version I tested on, which showed we should be testing against the latest CLN 26.",
      },
      {
        label: "VLS Merge Request !943",
        href: `${VLS}/merge_requests/943`,
        tldr: "Documentation for the help configuration, telling users exactly what overrides what.",
      },
      {
        label: "VLS Merge Request !946 (review note)",
        href: `${VLS}/merge_requests/946#note_4222566224`,
        tldr: (
          <>
            Forwards defaulted Validator methods in OnchainValidator. It came
            from an issue I found while checking issue{" "}
            <Link
              href={`${VLS}/work_items/581`}
              isExternal
              textDecoration={"underline"}
            >
              #581
            </Link>
            .
          </>
        ),
      },
      {
        label: "VLS Merge Request !937 (review note)",
        href: `${VLS}/merge_requests/937#note_4023323304`,
        tldr: "A merged MR I reviewed that adds VLS to Claude's OSS scanner.",
      },
      {
        label:
          "Bitcoin Core PR #36299: cli: Improve empty-response and fix -rpcclienttimeout regression (review)",
        href: "https://github.com/bitcoin/bitcoin/pull/36299#pullrequestreview-5289395986",
        tldr: "Two follow-ups to #34342 in bitcoin-cli. First, a response with Content-Length: 0 wasn't treated as complete, so the client kept reading until the server disconnected. Second, -rpcclienttimeout once again measures real idle time, so a large or slow response isn't cut off while data is still arriving.",
      },
    ],
  },
  {
    title: "PRESENTATION",
    links: [
      {
        label: "Coin Selection (Google Slides)",
        href: "https://docs.google.com/presentation/d/1Mh6qKWedt-BI8ZL1kxgRMVJEwAn-Dnq8Uh4uWg6V0aI/edit?usp=sharing",
        tldr: "Slides on Bitcoin coin selection, the topic behind my two coin selection articles below.",
      },
    ],
  },
  {
    title: "ARTICLES WRITTEN",
    links: [
      {
        label: "So… I Thought I Knew About Bitcoin",
        href: "https://medium.com/@tuedontuoyo/so-i-thought-i-knew-about-bitcoin-18b109754852",
        tldr: "My first week of the fellowship, digging deeper into the Bitcoin protocol, starting with how a new node finds its peers.",
      },
      {
        label: "All You Need to Know About Setting Up Your LND Node on Signet",
        href: "https://medium.com/@tuedontuoyo/all-you-need-to-know-about-setting-up-your-lnd-node-on-signet-d10039a56f73",
        tldr: "A hands-on guide to running an LND node on Signet on a cloud server. I set it up myself, ran into errors, worked through them, and wrote down the steps so others can follow.",
      },
      {
        label: "Bitcoin Core Coin Selection",
        href: "https://medium.com/@tuedontuoyo/bitcoin-core-coin-selection-c9477b11f2df",
        tldr: "How UTXOs work and how Bitcoin Core picks which ones to spend, covering Branch and Bound, Knapsack, Single Random Draw and CoinGrinder.",
      },
      {
        label:
          "Bitcoin Coin Selection: How Different Wallets Choose Your UTXOs",
        href: "https://medium.com/@tuedontuoyo/bitcoin-coin-selection-how-different-wallets-choose-your-utxos-b87a674a4fb4",
        tldr: "How Electrum, Wasabi and BlueWallet approach coin selection differently from Bitcoin Core, and the trade-offs between fees, privacy and managing your UTXO pool.",
      },
      {
        label: "Don't Trust, Verify, Even the Signer :)",
        href: "https://medium.com/@tuedontuoyo/dont-trust-verify-even-the-signer-34bf8803f1b9",
        tldr: "Why a Lightning node needs a remote signer: how often a node signs, why keeping keys on the same machine is risky, and how a validating signer like VLS helps.",
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
        <Flex fontFamily={"Manrope"} gap={"24px"} mt={"16px"} flexWrap={"wrap"}>
          {contacts.map((contact) => (
            <Link
              key={contact.href}
              href={contact.href}
              isExternal
              color={"white"}
              fontWeight={500}
              textDecoration={"underline"}
            >
              {contact.label} ↗
            </Link>
          ))}
        </Flex>
      </Flex>

      <Flex
        fontFamily={"Manrope"}
        direction={"column"}
        paddingY={"4rem"}
        gap={"48px"}
        width={["100%", "100%", "70%"]}
      >
        <Flex direction={"column"} gap={"12px"}>
          <Heading color={"#80808078"}>ABOUT</Heading>
          <Text
            color={"white"}
            fontSize={["18px", "18px", "24px"]}
            textAlign={["left", "left", "justify"]}
          >
            I&apos;m <strong>Tuedon</strong>, a{" "}
            <strong>SOFTWARE ENGINEER</strong> with over five years of
            experience. I&apos;ve also been involved in the Bitcoin space,
            building tools that help developers learn and understand Bitcoin. I
            joined the Btrust fellowship to go deeper into Bitcoin, challenge
            myself technically, and get involved in other areas of Bitcoin
            development.
          </Text>
        </Flex>
        <Flex direction={"column"} gap={"12px"}>
          <Heading color={"#80808078"}>WHY VLS</Heading>
          <Text
            color={"white"}
            fontSize={["18px", "18px", "24px"]}
            textAlign={["left", "left", "justify"]}
          >
            I wanted to work on something different from what I&apos;d done
            before, but still related to Lightning. I came across{" "}
            <strong>VLS (Validating Lightning Signer)</strong> through
            Sulaiman&apos;s talk at bitcoin++ Nairobi and had been following the
            project since, so when we were asked to choose a project, I picked
            VLS.
          </Text>
        </Flex>
        <Flex direction={"column"} gap={"12px"}>
          <Heading color={"#80808078"}>WHAT I LEARNED</Heading>
          <Text
            color={"white"}
            fontSize={["18px", "18px", "24px"]}
            textAlign={["left", "left", "justify"]}
          >
            Code reviews and trying to recreate issues are some of the best ways
            to understand a project well. That&apos;s how I approached my
            reviews: before looking at the code, I tried to reproduce the issue
            and confirm whether it had actually been fixed. My first
            contribution also came from simply using the project: use the
            software, find an issue, then fix it or report it.
          </Text>
        </Flex>
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
                {link.tldr && (
                  <Text
                    color={"white"}
                    fontSize={["16px", "16px", "18px"]}
                    mt={"4px"}
                  >
                    {link.tldr}
                  </Text>
                )}
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
