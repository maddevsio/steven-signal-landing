import { Select } from "@chakra-ui/react";
import { FC } from "react";

const SelectLanguage: FC = () => {
  return (
    <Select
      maxW="55px"
      fontWeight={700}
      fontSize="16px"
      lineHeight="20px"
      variant="unstyled"
    >
      <option value="russian">РУ</option>
      <option value="english">EN</option>
    </Select>
  );
};

export default SelectLanguage;
