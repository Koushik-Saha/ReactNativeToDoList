import React from 'react';
import {
    Box,
    Center,
    Flex,
    Text,
    Spacer,
    AspectRatio,
    Image,
    ScrollView,
} from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

const Mujib1Screen = ({navigation}) => {
    return (
        <ScrollView p={3} h="100">
            <Text fontSize="xs" color="red.500" fontWeight="medium">
                শেখ মুজিবুর রহমান
            </Text>
            <Text fontSize="xl" fontWeight="medium">
                কলকাতায় হিন্দু-মুসলিম সাম্প্রদায়িক দাঙ্গার বিরুদ্ধে মহাত্মা গান্ধীর প্রতিবাদ
            </Text>
            <Flex justifyContent="space-between" flexDirection="row" mb="2.5" mt="1.5">
                <Text fontSize="xs" fontWeight="medium" color="gray.500">
                    Publish from <Text color="blue.500">mujib100</Text>
                </Text>
                <Spacer/>
                <Text fontSize="xs" color="gray.500">
                    23 March 2022
                </Text>
            </Flex>
            <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                        uri: "https://www.linkpicture.com/q/2_432.jpg"
                    }} alt="image"/>
                </AspectRatio>
                <Center bg="violet.500" _dark={{
                    bg: "violet.400"
                }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                }} position="absolute" bottom="0" px="3" py="1.5">
                    6 March 2022
                </Center>
            </Box>
            <Flex align="center" flexDirection="row" mt="2">
                <Box borderRadius="md">
                    <Text fontSize="2xl">5.00</Text>
                </Box>
                <Box borderRadius="md">
                    <Text color="yellow.500" ml={2}>
                        <Icon name="star" size={14}/>
                        <Icon name="star" size={14}/>
                        <Icon name="star" size={14}/>
                        <Icon name="star" size={14}/>
                        <Icon name="star" size={14}/>
                    </Text>
                </Box>
            </Flex>
            <Text fontSize="md" color="gray.500" mt={2}>
                5k+ Rating on Google
            </Text>
            <Text mt={2} fontSize="sm" style={{textAlign: 'justify'}} mb={2}>
                কলকাতায় হিন্দু-মুসলিম সাম্প্রদায়িক দাঙ্গার বিরুদ্ধে মহাত্মা গান্ধীর প্রতিবাদ সভায় তরুণ ছাত্র নেতা শেখ মুজিবুর রহমান (পেছনে দাঁড়ানো) এবং হোসেন শহীদ সোহরাওয়ার্দী (১৯৪৭)।
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={6}>
                জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান ফরিদপুর জেলার গোপালগঞ্জ মহকুমার (বর্তমানে জেলা) টুঙ্গিপাড়া গ্রামে
                এক সম্ভ্রান্ত মুসলিম পরিবারে ১৯২০ সালের ১৭ মার্চ জন্মগ্রহণ করেন। শেখ লুৎফর রহমান ও মোসাম্মৎ সাহারা
                খাতুনের চার কন্যা ও দুই পুত্রের মধ্যে তৃতীয় সন্তান শেখ মুজিব। বাবা-মা ডাকতেন খোকা বলে। খোকার শৈশবকাল
                কাটে টুঙ্গি-পাড়ায়।
            </Text>
        </ScrollView>
    );
};

export default Mujib1Screen;

