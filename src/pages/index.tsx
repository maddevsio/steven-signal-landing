import { FC } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/StevenSignal/HeaderSection";
import AboutBotSection from "@/components/StevenSignal/AboutBotSection";

const StevenSignal: FC = () => (
  <Container maxW="1164px">
    <Box>
      <Header />
    </Box>
    <Box mt="100px">
      <AboutBotSection />
    </Box>
  </Container>
);

export default StevenSignal;
