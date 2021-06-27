import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'
import { Link } from "@chakra-ui/react"
import { SiAmazon,SiNetflix } from "react-icons/si";
import { FaCampground } from "react-icons/fa";


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
           
            <Box alignSelf="center" px="32" py="16">
            <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Projects and repos
          </Text>

                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Link href="https://github.com/kaurav11/Amazon_clone">
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.200"  h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "blue.400", }}>
                        <Icon color="black" p="4" as={SiAmazon} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold" >
                            Amazon_clone_web
                        </Text>
                    </Flex>
                    </Link>
                    <Link href="https://github.com/kaurav11/netflix-clone">
                    <Flex rounded="xl" direction="column" mt={4}  ml={isNotSmallerScreen ? 4 : 0}
                        bg="blue.200" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={SiNetflix} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Netflix_clone_web
                        </Text>
                    </Flex>
                    </Link>
                    <Link href="https://github.com/kaurav11/campour">
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="blue.200" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        <Icon as={FaCampground} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Camping_web_app
                        </Text>
                    </Flex>
                    </Link>
                </Flex>


                

            </Box>
        </Flex>
    )
}

export default Profile
