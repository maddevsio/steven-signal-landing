import { FC } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/StevenSignal/HeaderSection";
import AboutBotSection from "@/components/StevenSignal/AboutBotSection";

const StevenSignal: FC = () => {
  return (
    <Container maxW="1440px">
      <Container maxW="1164px">
        <Box>
          <Header />
        </Box>
        <Box mt="100px">
          <AboutBotSection />
        </Box>
      </Container>
    </Container>
  );
};

export default StevenSignal;
