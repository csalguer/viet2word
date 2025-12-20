import React from 'react';
import {
  Box,
  Grid,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { PALETTE } from '../../theme/design-system';

const ColorSwatch: React.FC<{ name: string; hex: string; bg: string }> = ({ name, hex, bg }) => (
  <VStack align="stretch" gap={2}>
    <Box h={16} w="full" rounded="md" shadow="sm" border="1px solid" borderColor="border" bg={bg} />
    <Box fontSize="xs" color="fg.muted" fontFamily="mono">
      <Text as="span" fontWeight="bold" display="block" color="fg">{name}</Text>
      {hex}
    </Box>
  </VStack>
);

export const PaletteGuide: React.FC = () => {
  return (
    <Box as="section" mb={16} borderTop="1px solid" borderColor="border" pt={10}>
      <Flex justify="space-between" align="flex-end" mb={6}>
        <Heading as="h3" size="sm" fontFamily="sans" fontWeight="bold" color="fg" textTransform="uppercase" letterSpacing="widest">
          Earth Tone System
        </Heading>
        <Text fontSize="xs" fontFamily="mono" color="fg.muted">Source: design-system.ts</Text>
      </Flex>

      <SimpleGrid columns={{ base: 2, md: 5 }} gap={4}>
        <ColorSwatch name="Paper (50)" hex={PALETTE.earth[50]} bg="earth.50" />
        <ColorSwatch name="Bone (200)" hex={PALETTE.earth[200]} bg="earth.200" />
        <ColorSwatch name="Taupe (400)" hex={PALETTE.earth[400]} bg="earth.400" />
        <ColorSwatch name="Walnut (600)" hex={PALETTE.earth[600]} bg="earth.600" />
        <ColorSwatch name="Charcoal (800)" hex={PALETTE.earth[800]} bg="earth.800" />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 2, md: 5 }} gap={4} mt={4}>
        <ColorSwatch name="Clay (500)" hex={PALETTE.clay[500]} bg="clay.500" />
        <ColorSwatch name="Ink Blue" hex={PALETTE.ink.blue} bg="ink.blue" />
        <ColorSwatch name="Obsidian (900)" hex={PALETTE.earth[900]} bg="earth.900" />
         <ColorSwatch name="Void (950)" hex={PALETTE.earth[950]} bg="earth.950" />
      </SimpleGrid>

      <Box mt={8} pt={8} borderTop="1px solid" borderColor="border">
          <Heading as="h4" size="xs" fontFamily="sans" fontWeight="bold" color="fg" textTransform="uppercase" letterSpacing="widest" mb={4}>
            Semantic Tokens
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
              <Box p={4} bg="canvas" border="1px solid" borderColor="border" rounded="md" textAlign="center">
                  <Text fontSize="xs" color="fg" fontFamily="mono">bg-canvas</Text>
              </Box>
              <Box p={4} bg="surface" border="1px solid" borderColor="border" rounded="md" textAlign="center">
                  <Text fontSize="xs" color="fg" fontFamily="mono">bg-surface</Text>
              </Box>
              <Box p={4} bg="subtle" border="1px solid" borderColor="border" rounded="md" textAlign="center">
                  <Text fontSize="xs" color="fg" fontFamily="mono">bg-subtle</Text>
              </Box>
              <Box p={4} bg="canvas" border="1px solid" borderColor="border" rounded="md" textAlign="center">
                  <Text fontSize="xs" color="fg.muted" fontFamily="mono">text-fg-muted</Text>
              </Box>
          </SimpleGrid>
      </Box>
    </Box>
  );
};
