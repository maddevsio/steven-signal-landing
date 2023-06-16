import { Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  title: string;
  imagePath: string;
}

const IconText: FC<IProps> = ({ imagePath, title }) => {
  return (
    <Flex gap={5} alignItems="center">
      <Image src={imagePath} alt="Icon" />
      <Text fontWeight={900} fontSize="40px" lineHeight="49px" color="#fff">{title}</Text>
    </Flex>
  );
};

export default IconText;
