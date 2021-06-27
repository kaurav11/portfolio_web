import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { Link } from "react-scroll";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
        wrap="wrap"
      >
        <Box mt={isNotSmallerScreen ? "0" : 20} align="flex-star">
          <Text fontSize="4xl" fontWeight="semibold" ml="20px">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            ml="20px"
          >
            Kaurav Chakravarty
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"} ml="20px">
            A real world problem solver through the art of code and an
            enthusiastic MERN stack developer.
          </Text>

          <Button
            mt={8}
            ml="20px"
            colorScheme="blue"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1J0q30Fbg_BmhAdK5Qtka7f5pezl84ACe/view?usp=sharing"
              )
            }
          >
            View my resume
          </Button>
          <Link to="footer" spy={true}  activeClass="active" smooth={true}>
            <Button mt={8} ml="20px" colorScheme="blue">
              Contact me!!
            </Button>
          </Link>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://pbs.twimg.com/profile_images/1394521118296272900/iS6kmUvs_400x400.jpg"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
