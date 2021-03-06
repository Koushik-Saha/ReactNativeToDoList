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

const Mujib4Screen = ({navigation}) => {
    return (
        <ScrollView p={3} h="100">
            <Text fontSize="xs" color="red.500" fontWeight="medium">
                শেখ মুজিবুর রহমান
            </Text>
            <Text fontSize="xl" fontWeight="medium">
                সত্তরের নির্বাচনের ফলাফল শুনছেন বঙ্গবন্ধু শেখ মুজিবুর রহমান। পাশে তাজউদ্দিন আহমেদ এবং আওয়ামী লীগের সাত
                নারী নেত্রী (১৯৭০) ।
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
                        uri: "https://www.linkpicture.com/q/31_58.jpg"
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
            <Text mt={2} fontSize="lg" style={{textAlign: 'justify'}}>
                ১৯৪৮
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={2}>
                ঢাকা বিশ্ববিদ্যালয়ে আইন বিভাগে ভর্তি হন এবং ৪ জানুয়ারি মুসলিম ছাত্রলীগ প্রতিষ্ঠা করেন। ২৩ ফেব্রুয়ারি
                প্রধানমন্ত্রী খাজা নাজিম উদ্দিন আইন পরিষদে ‘পূর্ব পাকিস্তানের জনগণ উর্দুকে রাষ্ট্রভাষা হিসেবে মেনে নেবে’
                বলে ঘোষণা দিলে তাৎক্ষণিক-ভাবে বঙ্গবন্ধু এর প্রতিবাদ জানান। খাজা নাজিমুদ্দিনের বক্তব্যে সারাদেশে
                প্রতিবাদের ঝড় ওঠে। শেখ মুজিব মুসলিম লীগের এই পরিকল্পনার বিরুদ্ধে আন্দোলনের প্রস্তুতি গ্রহণের জন্য
                কর্মতৎপরতা শুরু করেন। বঙ্গবন্ধু ছাত্র ও রাজনৈতিক নেতৃবৃন্দের সাথে যোগাযোগ করেন। ২ মার্চ ভাষা প্রসঙ্গে
                মুসলিম লীগের বিরুদ্ধে আন্দোলনকে সংগঠিত করার লক্ষ্যে বিভিন্ন রাজনৈতিক দলের কর্মীদের এক বৈঠক অনুষ্ঠিত হয়।
                ফজলুল হক মুসলিম হলে অনুষ্ঠিত এই বৈঠকে বঙ্গবন্ধুর প্রস্তাবμমে ‘সর্বদলীয় রাষ্ট্রভাষা সংগ্রাম পরিষদ’ গঠিত
                হয়। সংগ্রাম পরিষদ বাংলা ভাষা নিয়ে মুসলিম লীগের ষড়যন্ত্রের বিরুদ্ধে প্রতিবাদ জানাতে ১১ মার্চ সাধারণ
                ধর্মঘট আহ্বান করে। ১১ মার্চ বাংলা ভাষার দাবিতে ধর্মঘট পালনকালে বঙ্গবন্ধু সহকর্মীদের সাথে সচিবালয়ের
                সামনে বিক্ষোভরত অবস্থায় গ্রেফতার হন। বঙ্গবন্ধুকে গ্রেফতারে সারাদেশে ছাত্রসমাজ প্রতিবাদে ফেটে পড়ে।
                মুসলিম লীগ সরকার ছাত্রদের আন্দোলনের চাপে বঙ্গবন্ধুসহ গ্রেফতারকৃত ছাত্র নেতৃবৃন্দকে মুক্তি দিতে বাধ্য
                হয়। বঙ্গবন্ধু ১৫ মার্চ মুক্তি লাভ করেন। বঙ্গবন্ধু মুক্তি লাভের পর ১৬ মার্চ ঢাকা বিশ্ববিদ্যালয়ের
                আমতলায় সর্বদলীয় রাষ্ট্রভাষা সংগ্রাম পরিষদের উদ্যোগে ছাত্র-জনতার সভার আয়োজন করা হয়। এই সভায়
                বঙ্গবন্ধু সভাপতিত্ব করেন। সভায় পুলিশ হামলা চালায়। পুলিশি হামলার প্রতিবাদে সভা থেকে বঙ্গবন্ধু ১৭ মার্চ
                শিক্ষা প্রতিষ্ঠানে ধর্মঘট পালনের আহ্বান জানান। ১১ সেপ্টেম্বর ফরিদপুরে কর্ডন প্রথার বিরুদ্ধে আন্দোলন করার
                জন্য তাকে গ্রেফতার করা হয়।
            </Text>
            <Text mt={2} fontSize="lg" style={{textAlign: 'justify'}}>
                ১৯৪৯
            </Text>
            <Text mt={1} fontSize="sm" style={{textAlign: 'justify'}} mb={2}>
                ২১ জানুয়ারি শেখ মুজিব কারাগার থেকে মুক্তি পান। ঢাকা বিশ্ববিদ্যালয়ের চতুর্থ শ্রেণীর কর্মচারীরা তাদের
                দাবি-দাওয়া আদায়ের উদ্দেশ্যে ধর্মঘট ঘোষণা করলে বঙ্গবন্ধু ধর্মঘটের প্রতি সমর্থন জানান। কর্মচারীদের এ
                আন্দোলনে নেতৃত্ব দেয়ার অভিযোগে ২৯ মার্চ বিশ্ববিদ্যালয় কর্তৃপক্ষ অযৌক্তিকভাবে তাকে জরিমানা করে। তিনি এ
                অন্যায় নির্দেশ ঘৃণাভরে প্রত্যাখ্যান করেন। ফলে বিশ্ববিদ্যালয় থেকে বহি®কৃত হন। ১৯ এপ্রিল উপাচার্যের
                বাসভবনের সামনে অবস্থান ধর্মঘট করার কারণে গ্রেপ্তার হন। ২৩ জুন পূর্ব পাকিস্তান আওয়ামী মুসলিম লীগ গঠিত
                হয় এবং জেলে থাকা অবস্থায় বঙ্গবন্ধু এ দলের যুগ্ম সম্পাদক নির্বাচিত হন। জুলাই মাসের শেষের দিকে মুক্তিলাভ
                করেন। জেল থেকে বেরিয়েই দেশে বিরাজমান প্রকট খাদ্য সংকটের বিরুদ্ধে আন্দোলন সংগঠিত করতে থাকেন। সেপ্টেম্বরে
                ১৪৪ ধারা ভঙ্গের দায়ে গ্রেপ্তার হন ও পরে মুক্তি লাভ করেন। ১১ অক্টোবরে অনুষ্ঠিত আওয়ামী মুসলিম লীগের
                সভায় নূরুল আমিনের পদত্যাগ দাবি করেন। পাকিস্তানের প্রধানমন্ত্রী লিয়াকত আলী খানের আগমন উপলক্ষে আওয়ামী
                মুসলিম লীগ ভুখা মিছিল বের করে। এই মিছিলে নেতৃত্ব দেবার জন্য ১৪ অক্টোবর শেখ মুজিবুর রহমানকে গ্রেপ্তার করা
                হয়। এবারে তাকে প্রায় দু বছর পাঁচ মাস জেলে আটক রাখা হয়।
            </Text>
        </ScrollView>
    );
};

export default Mujib4Screen;

