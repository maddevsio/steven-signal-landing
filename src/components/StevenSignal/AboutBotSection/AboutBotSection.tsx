import IconText from '@/components/shared/IconText';
import Logo from '@/components/shared/Logo';
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FC } from "react";

const AboutBotSection: FC = () => {
  return (
    <Box
      bg="#3475EF"
      py="40px"
      w="100%"
      borderRadius="16px"
      m="auto"
      textAlign="center"
    >
      <Text fontWeight={900} fontSize="40px" lineHeight="49px" color="#fff">
        Кратко о боте
      </Text>
      <Box maxW="697px" m="auto" mt="16px" mb="56px">
        <Text fontWeight={400} fontSize="18px" lineHeight="22px" color="#fff">
          Бот для крипто-трейдеров и инвесторов, который на полном автомате
          высылает вам в Телеграм торговый сигнал на выбранную вами торговую
          пару.
        </Text>
      </Box>
      <Flex gap={7} justifyContent="center">
        <IconText title="Распознал паттерн" imagePath="./assets/images/svg/pattern.svg" />
        <Image src="./assets/images/svg/arrow.svg" alt="Arrow" />
        <IconText title="Выслал сигнал" imagePath="./assets/images/svg/signal.svg" />
      </Flex>
      <Logo w="60px" h="60px" />
    </Box>
  );
};

export default AboutBotSection;
