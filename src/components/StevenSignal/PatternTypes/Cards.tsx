/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react'

export interface ICard {
  title: string
  image: string
}

const MobileCards = ({ cardList }: any) => (
  <Accordion allowToggle>
    {cardList?.map((card: ICard, index: number) => (
      <AccordionItem key={index} border="none" borderBottom="1px solid #DADADA">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {card.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Image src={card.image} alt={card.image} w="100%" />
        </AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
)

const DesktopCards = ({ cardList }: any) => (
  <Flex gap="24px" py="32px" borderBottom="1px solid #DADADA">
    {cardList?.map((card: ICard, index: number) => (
      <Flex key={index} direction="column" gap="8px">
        <Text fontWeight={700} fontSize="20px" lineHeight="24px">
          {card.title}
        </Text>
        <Image src={card.image} alt={card.image} w="100%" />
      </Flex>
    ))}
  </Flex>
)

export { DesktopCards, MobileCards }
