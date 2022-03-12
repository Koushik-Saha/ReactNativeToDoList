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

const Mujib2Screen = ({navigation}) => {
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
                ৭ বছর বয়সে গিমাডাঙ্গা প্রাইমারি স্কুলে পড়াশোনা শুরু করেন। নয় বছর বয়সে গোপালগঞ্জ পাবলিক স্কুলে তৃতীয় শ্রেণীতে ভর্তি হন। পরে তিনি স্থানীয় মিশনারি স্কুলে ভর্তি হন।
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={6}>
                ১৪ বছর বয়সে বেরিবেরি রোগে আক্রান্ত হলে তার একটি চোখ কলকাতায় অপারেশন করা হয় এবং চক্ষুরোগের কারণে তার লেখাপড়ার সাময়িক বিরতি ঘটে।
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={6}>
                চক্ষুরোগে চার বছর শিক্ষাজীবন ব্যাহত হওয়ার পর শেখ মুজিব পুনরায় স্কুলে ভর্তি হন।
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={6}>
                ১৮ বছর বয়সে বঙ্গবন্ধু ও বেগম ফজিলাতুন্নেছা আনুষ্ঠানিক বিয়ে সম্পন্ন হয়। তারা দুই কন্যা শেখ হাসিনা, শেখ রেহানা ও তিন পুত্র শেখ কামাল, শেখ জামাল ও শেখ রাসেল এর জনক-জননী।
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={6}>
                অবিভক্ত বাংলার মুখ্যমন্ত্রী শেরে বাংলা এ কে ফজলুল হক এবং হোসেন শহীদ সোহরাওয়ার্দী গোপালগঞ্জ মিশনারি স্কুল পরিদর্শনে এলে বঙ্গবন্ধু স্কুলের ছাদ দিয়ে পানি পড়ত তা সারাবার জন্য ও ছাত্রাবাসের দাবি স্কুল ছাত্রদের পক্ষ থেকে তুলে ধরেন।
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={6}>
                শেখ মুজিব নিখিল ভারত মুসলিম ছাত্র ফেডারেশনে যোগদান করেন এবং এক বছরের জন্য বেঙ্গল মুসলিম ছাত্র ফেডারেশনের কাউন্সিলর নির্বাচিত হন। তাকে গোপালগঞ্জ মুসলিম ডিফেন্স কমিটির সেক্রেটারি নিযুক্ত করা হয়।
            </Text>
        </ScrollView>
    );
};

export default Mujib2Screen;

