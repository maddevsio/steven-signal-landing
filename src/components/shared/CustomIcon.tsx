import { Box, Image } from "@chakra-ui/react";
import { FC } from "react";

interface ICustomIcon {
  imageSrc: string;
  alt: string;
  width?: string | { [key: string]: string };
  height?: string | { [key: string]: string };
  transform?: string | { [key: string]: string };
  maxW?: string | { [key: string]: string };
  mx?: string | { [key: string]: string };
}

const CustomIcon: FC<ICustomIcon> = ({
  imageSrc,
  alt,
  width = "auto",
  height = "auto",
  ...props
}) => <Image src={imageSrc} w={width} h={height} alt={alt} {...props} />;

export default CustomIcon;
