import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Countdown from "react-countdown";
import {
  eachWeekendOfMonth,
  getWeekOfMonth,
  isSunday,
  addHours,
} from "date-fns";
const CountdownRender = (props) => {
  return (
    <Box fontSize={"100px"} color={"#2A1E0A"}>
      <Text as="span">{props?.formatted?.hours}:</Text>
      <Text as="span">{props?.formatted?.minutes}:</Text>
      <Text as="span">{props?.formatted?.seconds}</Text>
    </Box>
  );
};
const CountdownPage = () => {
  const weekendArray = eachWeekendOfMonth(Date.now());
  const monthWeek = getWeekOfMonth(Date.now());
  const allSundaysInAMonth = weekendArray.filter((day) => isSunday(day));
  console.log(allSundaysInAMonth, monthWeek);
  const currentSunday = addHours(allSundaysInAMonth[monthWeek - 1], 9);
  return (
    <Box
      backgroundImage={"/church/welcome.jpg"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      backgroundColor={"#FFF1D9"}
      minH={"100vh"}
      maxH={"100vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"start"}
      paddingBottom={"15vh"}
      paddingLeft={"10vw"}
      alignItems={"end"}
    >
      <Countdown
        className="h-screen flex w-full justify-end items-end"
        date={currentSunday}
        renderer={(props) => <CountdownRender {...props} />}
      />
    </Box>
  );
};

export default CountdownPage;
