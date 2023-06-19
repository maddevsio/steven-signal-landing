/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'

interface ICard {
  title: string
  image: string
}

const Cards = ({ cardList }: any) => {
  const [isLessThan768] = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {isLessThan768 ? (
        <>Hello</>
      ) : (
        <Flex gap="24px">
          {cardList?.map((card: ICard, index: number) => (
            <Flex key={index} direction="column" gap="8px">
              <Text fontWeight={700} fontSize="20px" lineHeight="24px">
                {card.title}
              </Text>
              <Image src={card.image} alt={card.image} w="100%" />
            </Flex>
          ))}
        </Flex>
      )}
    </>
  )
}

export default Cards
