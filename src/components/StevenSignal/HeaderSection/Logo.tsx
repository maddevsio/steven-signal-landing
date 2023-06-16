import { Text, Image, Flex } from "@chakra-ui/react";
import { FC } from "react";
import Logo from "@/components/shared/Logo";

const HeaderLogo: FC = () => {
  return (
    <Flex direction="column" alignItems="center" gap="16px">
      <Logo
        w={{ base: "80px", md: "111px" }}
        h={{ base: "80px", md: "111px" }}
      />
      <Text
        fontWeight={700}
        fontSize={{ base: "16px", md: "20px" }}
        lineHeight={{ base: "19px", md: "24px" }}
      >
        Стивен Сигнал
      </Text>
    </Flex>
  );
};

export default HeaderLogo;
