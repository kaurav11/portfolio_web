import Icon from "@chakra-ui/icon";
import { Link } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/layout";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedinOption } from "react-icons/gr";
import { DiStackoverflow } from "react-icons/di";
import { SiHackerearth, SiLeetcode } from "react-icons/si";

function Social() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <>
    
    <Stack direction={isNotSmallerScreen ? "row" : "column"} spacing="35px">
      {/* <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      > */}
        {/* <Icon as={GrLinkedinOption} boxSize="50" /> */}
        <Link href="https://www.linkedin.com/in/kaurav-chakravarty-81553b1b1">
        <img src="https://img.icons8.com/color/48/000000/linkedin-2--v1.png" />
        </Link>
        <Link href="https://github.com/kaurav11">
        <Icon as={GoMarkGithub} boxSize="50" />
        </Link>
        <Link href="https://stackoverflow.com/users/14142891/kaurav-chakravarty">
        <Icon as={DiStackoverflow} boxSize="50" />
        </Link>
        <Link href="https://www.hackerearth.com/@kcib.007">
        <Icon as={SiHackerearth} boxSize="50" />
        </Link>
        <Link href="https://leetcode.com/user4781d/">
        <Icon as={SiLeetcode} boxSize="50" />
        </Link>
        <Link href="https://auth.geeksforgeeks.org/user/kcib007/profile">
        <img src="https://img.icons8.com/color/50/000000/GeeksforGeeks.png" />
        </Link>
      {/* </Flex> */}
    </Stack>
    </>
  );
}

export default Social;
