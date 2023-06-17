import { Text, Flex, Grid, GridItem } from "@chakra-ui/react";

const RecognizablePatterns = () => {
  return (
    <Grid py="25px" px="48px" bg="#3475EF" borderRadius="8px">
      <GridItem>
        <Flex gap="55px">
          <Text>Распознаваемые паттерны</Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default RecognizablePatterns;
