import { Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import CustomIcon from './CustomIcon'

interface IIconText {
  title: string
  imagePath: string
  alt?: string
}

const IconText: FC<IIconText> = ({ imagePath, title, alt }) => (
  <Flex gap={5} alignItems="center">
    <CustomIcon imageSrc={imagePath} alt={alt || 'Image'} />
    <Text
      fontWeight={900}
      fontSize={{ base: '24px', md: '40px' }}
      lineHeight={{ base: '29px', md: '49px' }}
      color="#fff"
    >
      {title}
    </Text>
  </Flex>
)

export default IconText
