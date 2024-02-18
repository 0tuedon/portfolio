import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import {FaVolumeUp} from 'react-icons/fa'
import Intro from "../../public/sound.m4a"
import { darkTheme } from "../../theme/modes";
import useSound from "use-sound";

const Hero = () => {
    const [play] = useSound(Intro,{volume:"0.20"})
  return (
    <Flex
      w={"full"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"12px"}
    >
        <Flex alignItems={"center"} flexDir={["column", "row"]} gap={"8px"}>
        <Text textAlign={"center"} fontSize={"64px"} lineHeight={"1"} fontWeight={500}>
        Hi,{" "}
        <Text className="animate-spin" color={darkTheme.gold[400]} as={"span"}>
          {" "}
          0Tuedon
        </Text>{" "}
        here
      </Text>
     <button onClick={play}>
        <FaVolumeUp color="#ffb35a" size={30} />
     </button>
        </Flex>
     
      <Text
        color={darkTheme.white}
        lineHeight={"1"}
        fontSize={"36px"}
        as={"span"}
        textAlign={"center"}
      >
        Software Engineer
      </Text>
    </Flex>
  );
};

export default Hero;
