import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "@chakra-ui/react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import College from "./components/College";
import Footer from "./components/Footer";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:500px)");

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading  size="md" fontWeight="semibold" color="cyan.400">
          PORTFOLIO
        </Heading>

        <Spacer />
        {/* {isNotSmallerScreen ? (
          <>
            
            <Link href="https://www.linkedin.com/in/kaurav-chakravarty-81553b1b1">
              <IconButton
                icon={<FaLinkedin />}
                isRound="true"
                // // onClick={toggleColorMode}
              ></IconButton>
            </Link>
            <Link href="https://twitter.com/Kauravchakrava1">
              <IconButton
                ml={2}
                icon={<FaTwitter />}
                isRound="true"
                // onClick={toggleColorMode}
              ></IconButton>
            </Link>
            <Link href="https://github.com/kaurav11">
              <IconButton
                ml={2}
                icon={<FaGithub />}
                isRound="true"
                // onClick={toggleColorMode}
              ></IconButton>
            </Link>
            <IconButton
              ml={8}
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound="true"
              onClick={toggleColorMode}
            ></IconButton>
          </>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              mr="0"
              variant="outline"
            />
            <MenuList>
            <Link href="https://www.linkedin.com/in/kaurav-chakravarty-81553b1b1">
              <IconButton
                icon={<FaLinkedin />}
                isRound="true"
                // // onClick={toggleColorMode}
              ></IconButton>
            </Link>
            <Link href="https://twitter.com/Kauravchakrava1">
              <IconButton
                ml={2}
                icon={<FaTwitter />}
                isRound="true"
                // onClick={toggleColorMode}
              ></IconButton>
            </Link>
            <Link href="https://github.com/kaurav11">
              <IconButton
                ml={2}
                icon={<FaGithub />}
                isRound="true"
                // onClick={toggleColorMode}
              ></IconButton>
            </Link>
            <IconButton
              ml={8}
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound="true"
              onClick={toggleColorMode}
            ></IconButton>
            </MenuList>
          </Menu>
        )} */}
         <Link href="https://www.linkedin.com/in/kaurav-chakravarty-81553b1b1">
              <IconButton
                icon={<FaLinkedin />}
                isRound="true"
                // // onClick={toggleColorMode}
              ></IconButton>
            </Link>
            <Link href="https://twitter.com/Kauravchakrava1">
              <IconButton
                ml={2}
                icon={<FaTwitter />}
                isRound="true"
                // onClick={toggleColorMode}
              ></IconButton>
            </Link>
            <Link href="https://github.com/kaurav11">
              <IconButton
                ml={2}
                icon={<FaGithub />}
                isRound="true"
                // onClick={toggleColorMode}
              ></IconButton>
            </Link>
            <IconButton
              ml={8}
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound="true"
              onClick={toggleColorMode}
            ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <College></College>
      <Profile></Profile>
      <Footer></Footer>
    </VStack>
  );
}

export default App;
