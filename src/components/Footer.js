import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import Icon from '@chakra-ui/icon';
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { SiGmail,SiWhatsapp } from "react-icons/si";
import Form from "./Form"

function Footer() {
    return (
        <div id="footer">
        <Flex w="100%" h="20%" direction="column" align="center">
           
        <Text
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Contact Information
          </Text>
          <Flex wrap="wrap">
          <Flex>
          <Icon color="black" p="4" as={SiGmail} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold" >
                            2018ugcs027@nitjsr.ac.in
                        </Text>
          </Flex>
          <Flex>
          <Icon color="black" p="4" as={SiWhatsapp} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold" >
                            9934889530

                        </Text>
          </Flex>
          </Flex>

            <Form></Form>

        </Flex>
        </div>
            
        
    )
}

export default Footer
