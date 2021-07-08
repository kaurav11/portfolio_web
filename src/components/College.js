import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

function College() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="10px"
          backgroundColor="transparent"
          borderRadius="50px"
          boxShadow="lg"
          boxSize="300px"
          src="https://upload.wikimedia.org/wikipedia/en/7/7d/National_Institute_of_Technology%2C_Jamshedpur_Logo.png"
        />
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold" ml="20px">
            BTECH(2018-2022)
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            ml="20px"
          >
            National Institute of Technology Jamshedpur
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"} ml="20px">
            An Institute of National Importance Established by Government of
            India
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
}

export default College;
