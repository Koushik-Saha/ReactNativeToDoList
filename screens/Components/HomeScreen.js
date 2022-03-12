import React from 'react';
import {Text, StatusBar, Button} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {
    AspectRatio,
    Box,
    Center,
    Flex,
    Heading,
    HStack,
    Image, Pressable,
    ScrollView,
    Stack,
    VStack
} from "native-base";

const HomeScreen = ({navigation}) => {
    const {colors} = useTheme();
    const theme = useTheme();
    return (
        <Box flex={1} safeArea>
            <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"}/>
            <ScrollView>
                <VStack space={1.5} w="100%" px="1.5">
                    <Pressable onPress={() => navigation.navigate("Mujib1")}>
                        <Flex direction="row" mb="2.5" mt="1.5">
                            <Center flex={1} px="1">
                                <Box alignItems="center">
                                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                         _dark={{
                                             borderColor: "coolGray.600",
                                             backgroundColor: "gray.700"
                                         }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }} alt="image"/>
                                            </AspectRatio>
                                            <Center bg="violet.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "500",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="2" py="0.4">
                                                03 March 2022
                                            </Center>
                                        </Box>
                                        <Stack p="3" space={0}>
                                            <Stack space={0}>
                                                <Heading size="sm" ml="-1">
                                                    The Garden City
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} ml="-0.5" mt="-1">
                                                    The Silicon Valley of India.
                                                </Text>
                                            </Stack>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontSize="xs">
                                                        6 min ago
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box >
                            </Center >
                            <Center flex={1} px="1">
                                <Box alignItems="center">
                                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                         _dark={{
                                             borderColor: "coolGray.600",
                                             backgroundColor: "gray.700"
                                         }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }} alt="image"/>
                                            </AspectRatio>
                                            <Center bg="violet.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "500",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="2" py="0.4">
                                                03 March 2022
                                            </Center>
                                        </Box>
                                        <Stack p="3" space={0}>
                                            <Stack space={0}>
                                                <Heading size="sm" ml="-1">
                                                    The Garden City
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} ml="-0.5" mt="-1">
                                                    The Silicon Valley of India.
                                                </Text>
                                            </Stack>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontSize="xs">
                                                        6 min ago
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box >
                            </Center >
                        </Flex>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Details")}>
                        <Flex direction="row" mb="2.5" mt="1.5">
                            <Center flex={1} px="1">
                                <Box alignItems="center">
                                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                         _dark={{
                                             borderColor: "coolGray.600",
                                             backgroundColor: "gray.700"
                                         }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }} alt="image"/>
                                            </AspectRatio>
                                            <Center bg="violet.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "500",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="2" py="0.4">
                                                03 March 2022
                                            </Center>
                                        </Box>
                                        <Stack p="3" space={0}>
                                            <Stack space={0}>
                                                <Heading size="sm" ml="-1">
                                                    The Garden City
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} ml="-0.5" mt="-1">
                                                    The Silicon Valley of India.
                                                </Text>
                                            </Stack>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontSize="xs">
                                                        6 min ago
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box >
                            </Center >
                            <Center flex={1} px="1">
                                <Box alignItems="center">
                                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                         _dark={{
                                             borderColor: "coolGray.600",
                                             backgroundColor: "gray.700"
                                         }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }} alt="image"/>
                                            </AspectRatio>
                                            <Center bg="violet.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "500",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="2" py="0.4">
                                                03 March 2022
                                            </Center>
                                        </Box>
                                        <Stack p="3" space={0}>
                                            <Stack space={0}>
                                                <Heading size="sm" ml="-1">
                                                    The Garden City
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} ml="-0.5" mt="-1">
                                                    The Silicon Valley of India.
                                                </Text>
                                            </Stack>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontSize="xs">
                                                        6 min ago
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box >
                            </Center >
                        </Flex>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Details")}>
                        <Flex direction="row" mb="2.5" mt="1.5">
                            <Center flex={1} px="1">
                                <Box alignItems="center">
                                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                         _dark={{
                                             borderColor: "coolGray.600",
                                             backgroundColor: "gray.700"
                                         }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }} alt="image"/>
                                            </AspectRatio>
                                            <Center bg="violet.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "500",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="2" py="0.4">
                                                03 March 2022
                                            </Center>
                                        </Box>
                                        <Stack p="3" space={0}>
                                            <Stack space={0}>
                                                <Heading size="sm" ml="-1">
                                                    The Garden City
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} ml="-0.5" mt="-1">
                                                    The Silicon Valley of India.
                                                </Text>
                                            </Stack>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontSize="xs">
                                                        6 min ago
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box >
                            </Center >
                            <Center flex={1} px="1">
                                <Box alignItems="center">
                                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                         _dark={{
                                             borderColor: "coolGray.600",
                                             backgroundColor: "gray.700"
                                         }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }} alt="image"/>
                                            </AspectRatio>
                                            <Center bg="violet.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "500",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="2" py="0.4">
                                                03 March 2022
                                            </Center>
                                        </Box>
                                        <Stack p="3" space={0}>
                                            <Stack space={0}>
                                                <Heading size="sm" ml="-1">
                                                    The Garden City
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} ml="-0.5" mt="-1">
                                                    The Silicon Valley of India.
                                                </Text>
                                            </Stack>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontSize="xs">
                                                        6 min ago
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box >
                            </Center >
                        </Flex>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Details")}>
                        <Flex direction="row" mb="2.5" mt="1.5">
                            <Center flex={1} px="1">
                                <Box alignItems="center">
                                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                         _dark={{
                                             borderColor: "coolGray.600",
                                             backgroundColor: "gray.700"
                                         }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }} alt="image"/>
                                            </AspectRatio>
                                            <Center bg="violet.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "500",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="2" py="0.4">
                                                03 March 2022
                                            </Center>
                                        </Box>
                                        <Stack p="3" space={0}>
                                            <Stack space={0}>
                                                <Heading size="sm" ml="-1">
                                                    The Garden City
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} ml="-0.5" mt="-1">
                                                    The Silicon Valley of India.
                                                </Text>
                                            </Stack>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontSize="xs">
                                                        6 min ago
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box >
                            </Center >
                            <Center flex={1} px="1">
                                <Box alignItems="center">
                                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                         _dark={{
                                             borderColor: "coolGray.600",
                                             backgroundColor: "gray.700"
                                         }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }} alt="image"/>
                                            </AspectRatio>
                                            <Center bg="violet.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "500",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="2" py="0.4">
                                                03 March 2022
                                            </Center>
                                        </Box>
                                        <Stack p="3" space={0}>
                                            <Stack space={0}>
                                                <Heading size="sm" ml="-1">
                                                    The Garden City
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} ml="-0.5" mt="-1">
                                                    The Silicon Valley of India.
                                                </Text>
                                            </Stack>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontSize="xs">
                                                        6 min ago
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box >
                            </Center >
                        </Flex>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Details")}>
                        <Flex direction="row" mb="2.5" mt="1.5">
                            <Center flex={1} px="1">
                                <Box alignItems="center">
                                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                         _dark={{
                                             borderColor: "coolGray.600",
                                             backgroundColor: "gray.700"
                                         }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }} alt="image"/>
                                            </AspectRatio>
                                            <Center bg="violet.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "500",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="2" py="0.4">
                                                03 March 2022
                                            </Center>
                                        </Box>
                                        <Stack p="3" space={0}>
                                            <Stack space={0}>
                                                <Heading size="sm" ml="-1">
                                                    The Garden City
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} ml="-0.5" mt="-1">
                                                    The Silicon Valley of India.
                                                </Text>
                                            </Stack>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontSize="xs">
                                                        6 min ago
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box >
                            </Center >
                            <Center flex={1} px="1">
                                <Box alignItems="center">
                                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                         _dark={{
                                             borderColor: "coolGray.600",
                                             backgroundColor: "gray.700"
                                         }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }} alt="image"/>
                                            </AspectRatio>
                                            <Center bg="violet.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "500",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="2" py="0.4">
                                                03 March 2022
                                            </Center>
                                        </Box>
                                        <Stack p="3" space={0}>
                                            <Stack space={0}>
                                                <Heading size="sm" ml="-1">
                                                    The Garden City
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} ml="-0.5" mt="-1">
                                                    The Silicon Valley of India.
                                                </Text>
                                            </Stack>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontSize="xs">
                                                        6 min ago
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box >
                            </Center >
                        </Flex>
                    </Pressable>
                </VStack>
            </ScrollView>
        </Box>
    );
};

export default HomeScreen;
