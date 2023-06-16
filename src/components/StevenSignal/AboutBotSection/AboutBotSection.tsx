import CustomIcon from "@/components/shared/CustomIcon";
import IconText from "@/components/shared/IconText";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FC } from "react";

const AboutBotSection: FC = () => {
  return (
    <Box
      as="section"
      bg="#3475EF"
      py="40px"
      px="16px"
      w="100%"
      borderRadius="16px"
      m="auto"
      textAlign="center"
    >
      <Text
        fontWeight={900}
        fontSize={{ base: "24px", md: "40px" }}
        lineHeight={{ base: "29px", md: "49px" }}
        color="#fff"
      >
        Кратко о боте
      </Text>
      <Box maxW="697px" m="auto" mt="16px" mb="56px">
        <Text
          fontWeight={400}
          fontSize={{ base: "16px", md: "18px" }}
          lineHeight={{ base: "19px", md: "22px" }}
          color="#fff"
        >
          Бот для крипто-трейдеров и инвесторов, который на полном автомате
          высылает вам в Телеграм торговый сигнал на выбранную вами торговую
          пару.
        </Text>
      </Box>
      <Flex
        gap={{base: '24px', lg: '40px'}}
        justifyContent="center"
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
      >
        <IconText
          title="Распознал паттерн"
          imagePath="./assets/images/svg/pattern.svg"
        />
        <CustomIcon
          imageSrc="./assets/images/svg/arrow.svg"
          alt="Arrow"
          width={{ base: "40px", lg: "80px" }}
          height={{ base: "40px", lg: "80px" }}
          transform={{ base: 'rotate(90deg)', lg: 'none' }}
        />
        <IconText
          title="Выслал сигнал"
          imagePath="./assets/images/svg/signal.svg"
        />
      </Flex>
    </Box>
  );
};

export default AboutBotSection;
