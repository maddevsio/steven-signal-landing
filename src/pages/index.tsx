import { FC } from "react";
import { Container, Flex } from "@chakra-ui/react";
import Header from "@/components/StevenSignal/HeaderSection";
import AboutBotSection from "@/components/StevenSignal/AboutBotSection";
import TextSection from '@/components/StevenSignal/TextSection';
import BinanceSection from '@/components/StevenSignal/BinanceSection';
import RecognizablePatterns from '@/components/StevenSignal/RecognizablePatterns';

const StevenSignal: FC = () => (
  <Container maxW="1164px">
    <Flex direction="column" gap={{base: '16px', md: "32px"}}>
      <Header />
      <AboutBotSection />
      <TextSection />
      <BinanceSection />
      <RecognizablePatterns />
    </Flex>
  </Container>
);

export default StevenSignal;
