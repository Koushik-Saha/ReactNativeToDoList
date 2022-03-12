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

const Mujib3Screen = ({navigation}) => {
    return (
        <ScrollView p={3} h="100">
            <Text fontSize="xs" color="red.500" fontWeight="medium">
                শেখ মুজিবুর রহমান
            </Text>
            <Text fontSize="xl" fontWeight="medium">
                রাজনৈতিক গুরু হোসেন শহীদ সোহরাওয়ার্দীর সঙ্গে তরুণ ছাত্রনেতা শেখ মুজিবুর রহমান (১৯৪৯)
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
                        uri: "https://www.linkpicture.com/q/7_222.jpg"
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
                এস.এস.সি পাস করেন। কলকাতা ইসলামিয়া কলেজে মানবিক বিভাগে ইন্টারমিডিয়েট ক্লাসে ভর্তি হন এবং বেকার হোস্টেলে থাকার ব্যবস্থা হয়। বঙ্গবন্ধু এই বছরেই পাকিস্তান আন্দোলনের সাথে সক্রিয়ভাবে যুক্ত হয়ে পড়েন।
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={6}>
                সক্রিয় রাজনীতিতে জড়িয়ে পড়েন এবং মুসলিম লীগের কাউন্সিলর নির্বাচিত হন।
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={6}>
                বঙ্গবন্ধু ইসলামিয়া কলেজ ছাত্র সংসদের সাধারণ সম্পাদক (জিএস) নির্বাচিত হন।
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={6}>
                কোলকাতা বিশ্ববিদ্যালয়ের অধীনে ইসলামিয়া কলেজ থেকে বি.এ পাশ করেন। ভারত ভাগ হয়ে পাকিস্তান রাষ্ট্র প্রতিষ্ঠা হলে কোলকাতায় দাঙ্গা প্রতিরোধ তৎপরতায় অগ্রণী ভূমিকা পালন করেন।
            </Text>
        </ScrollView>
    );
};

export default Mujib3Screen;

