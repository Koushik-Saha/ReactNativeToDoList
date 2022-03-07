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

const DetailsScreen = ({navigation}) => {
    return (
        <ScrollView p={3} h="100">
            <Text fontSize="xs" color="red.500" fontWeight="medium">
                HISTORY
            </Text>
            <Text fontSize="xl" fontWeight="medium">
                Always forgave your enemies, nothing annoys
            </Text>
            <Flex justifyContent="space-between" flexDirection="row" mb="2.5" mt="1.5">
                <Text fontSize="xs" fontWeight="medium" color="gray.500">
                    Publish from <Text color="blue.500">iStudio</Text>
                </Text>
                <Spacer/>
                <Text fontSize="xs" color="gray.500">
                    23 March 2022
                </Text>
            </Flex>
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
                900 Rating on Google Play Store
            </Text>
            <Text mt={2} fontSize="sm" style={{textAlign: 'justify'}} mb={6}>
                World War II or the Second World War, often abbreviated as WWII or WW2,
                was a global war that lasted from 1939 to 1945. It involved the vast majority
                of the world's countries—including all of the great powers—forming two opposing
                military alliances: the Allies and the Axis powers. In a total war directly involving
                more than 100 million personnel from more than 30 countries, the major participants threw
                their entire economic, industrial, and scientific capabilities behind the war effort, blurring
                the distinction between civilian and military resources. Aircraft played a major role in the
                conflict, enabling the strategic bombing of population centres and the only two uses of nuclear
                weapons in war. World War II was by far the deadliest conflict in human history; it resulted in 70 to
                85 million fatalities, a majority being civilians. Tens of millions of people died due to genocides
                (including the Holocaust), starvation, massacres, and disease. In the wake of the Axis defeat, Germany
                and Japan were occupied, and war crimes tribunals were conducted against German and Japanese leaders.
                World War II is generally considered to have begun on 1 September 1939, when Nazi Germany, under Adolf
                Hitler, invaded Poland. The United Kingdom and France subsequently declared war on Germany on 3
                September. Under the Molotov–Ribbentrop Pact of August 1939, Germany and the Soviet Union had
                partitioned Poland and marked out their "spheres of influence" across Finland, Estonia, Latvia,
                Lithuania and Romania. From late 1939 to early 1941, in a series of campaigns and treaties, Germany
                conquered or controlled much of continental Europe, and formed the Axis alliance with Italy and Japan
                (along with other countries later on). Following the onset of campaigns in North Africa and East Africa,
                and the fall of France in mid-1940, the war continued primarily between the European Axis powers and the
                British Empire, with war in the Balkans, the aerial Battle of Britain, the Blitz of the UK, and the
                Battle of the Atlantic. On 22 June 1941, Germany led the European Axis powers in an invasion of the
                Soviet Union, opening the Eastern Front, the largest land theatre of war in history.
            </Text>
        </ScrollView>
    );
};

export default DetailsScreen;

