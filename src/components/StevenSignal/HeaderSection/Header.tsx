import { Box, Center, Container, Flex, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import SelectLanguage from "@/components/StevenSignal/HeaderSection/SelectLanguage";
import HeaderLogo from '@/components/StevenSignal/HeaderSection/Logo';
import { ArrowDownIcon } from '@chakra-ui/icons';

const Header: FC = () => (
  <Box as="header">
    <Flex justifyContent="flex-end" py="26px">
      <SelectLanguage />
    </Flex>
    <Box mt="24px">
      <HeaderLogo />
    </Box>
    <Box maxW="1025px" m="auto" mt="76px">
      <Text textAlign="center" fontWeight={900} fontSize="64px" lineHeight="78px">ИИ, который распознает торговые паттерны и высылает сигналы в  Телеграм!</Text>
    </Box>
    <Center mt="141px">
      <Link textColor="#3475EF" fontWeight={500} fontSize="16px" lineHeight="19px">
        <ArrowDownIcon boxSize={5} mr="16px" />
        Получить бота бесплатно
      </Link>
    </Center>
  </Box>
);

export default Header;
