import React from 'react';
import { 
  SimpleGrid, 
  Box, 
  Heading, 
  Text, 
  Card, 
} from '@chakra-ui/react';

interface CardItem {
  title: string;
  description: string;
}

interface CardListProps {
  items: CardItem[];
}

export const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
      {items.map((item, index) => (
        <Card.Root key={index} variant="outline" _hover={{ shadow: 'md' }} transition="box-shadow 0.2s">
          <Card.Header>
            <Heading size="md">{item.title}</Heading>
          </Card.Header>
          <Card.Body pt={0}>
            <Text color="gray.600" _dark={{ color: 'gray.300' }}>
              {item.description}
            </Text>
          </Card.Body>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
};
