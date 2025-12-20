import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
} from '@chakra-ui/react';
import { LayoutMode, WordEntry } from './types';

interface DictionaryEntryProps {
  mode: LayoutMode;
  data: WordEntry;
}

export const DictionaryEntry: React.FC<DictionaryEntryProps> = ({ mode, data }) => {
  if (mode === 'editorial') {
    return (
      <Box
        bg="subtle"
        p={{ base: 6, md: 10 }}
        rounded="lg"
        shadow="sm"
        border="1px solid"
        borderColor="border"
        transition="colors 0.3s"
      >
        <VStack align="stretch" gap={6}>
          {/* Header - Editorial */}
          <Box borderBottom="2px solid" borderColor="fg" pb={4}>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl' }}
              fontWeight="black"
              fontFamily="editorialSerif"
              color="fg"
              letterSpacing="tight"
              lineHeight="0.9"
              fontStyle="italic"
            >
              {data.word}
            </Heading>
            <Flex
              wrap="wrap"
              align="baseline"
              gap={3}
              mt={3}
              color="fg.muted"
              fontFamily="editorialSans"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              <Text
                as="span"
                aria-label="pronunciation"
                textTransform="none"
                fontFamily="editorialSerif"
                fontStyle="italic"
                fontSize="lg"
                color="fg"
              >
                {data.pronunciation}
              </Text>
              {data.alternatives && (
                <>
                  <Box w={1} h={1} rounded="full" bg="earth.400" />
                  <Text as="span">{data.alternatives[0]}</Text>
                </>
              )}
            </Flex>
          </Box>

          {/* Etymology */}
          <Box bg="canvas" p={4} rounded="md" borderLeft="4px solid" borderColor="accent">
            <Text
              fontFamily="editorialSans"
              fontWeight="bold"
              fontSize="10px"
              textTransform="uppercase"
              letterSpacing="widest"
              color="accent"
              mb={1}
              display="block"
            >
              Origin Story
            </Text>
            <Text fontFamily="editorialSerif" fontSize="base" lineHeight="relaxed" color="fg">
              {data.etymology}
            </Text>
          </Box>

          {/* Definitions */}
          <VStack align="stretch" gap={4} mt={2}>
            {data.definitions.map((def, idx) => (
              <Box key={def.id} fontSize="lg">
                <Box fontFamily="editorialSerif" lineHeight="snug">
                  <Text as="span" fontFamily="editorialSans" fontWeight="bold" color="accent" mr={2}>
                    {idx + 1}.
                  </Text>
                  <Text as="span" fontFamily="editorialSans" fontWeight="bold" fontStyle="italic" color="fg.muted" mr={2}>
                    {def.partOfSpeech}
                  </Text>

                  {def.meta && (
                    <Badge
                      variant="outline"
                      borderColor="border"
                      bg="canvas"
                      fontSize="10px"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      fontFamily="editorialSans"
                      fontWeight="bold"
                      color="fg.muted"
                      mr={2}
                      verticalAlign="middle"
                      transform="translateY(-1px)"
                    >
                      {def.meta.join(', ')}
                    </Badge>
                  )}

                  <Text as="span" color="fg">{def.meaning}</Text>
                </Box>

                {def.example && (
                  <Box mt={1.5} ml={6} pl={3} borderLeft="2px solid" borderColor="border">
                    <Text fontFamily="editorialSerif" fontStyle="italic" color="fg.muted" fontSize="base">
                      "{def.example}"
                    </Text>
                  </Box>
                )}
              </Box>
            ))}
          </VStack>
        </VStack>
      </Box>
    );
  }

  if (mode === 'modern') {
    return (
      <Box
        bg="surface"
        px={{ base: 6, md: 12 }}
        py={{ base: 8, md: 10 }}
        maxW="3xl"
        mx="auto"
        shadow="sm"
        borderTop="4px solid"
        borderColor="fg"
      >
        <Box fontFamily="modernBody" color="fg" fontSize="lg">
           <Box lineHeight="relaxed">
             <Text
               as="span"
               fontSize="4xl"
               fontFamily="modernDisplay"
               fontWeight="bold"
               color="fg"
               letterSpacing="tight"
               lineHeight="none"
               mr={2}
             >
              {data.word}
             </Text>

             <Text as="span" color="fg.muted" whiteSpace="nowrap" mr={2}>
               \{data.pronunciation.replace(/\//g, '')}\
             </Text>

             <Text as="span" fontStyle="italic" fontWeight="bold" color="fg.muted" mr={3}>
               n
             </Text>
           </Box>

           <VStack align="stretch" gap={1} mt={2}>
             {data.definitions.map((def, idx) => (
                <Box key={def.id} pl="1.5em" textIndent="-1.5em" position="relative">
                  <Text as="span" fontWeight="bold" color="fg" mr={1}>{idx + 1}</Text>
                  <Text as="span" fontStyle="italic" fontWeight="bold" color="fg.muted" mr={1}>{def.partOfSpeech}</Text>
                  <Text as="span" fontWeight="bold" mr={2}>:</Text>
                  <Text as="span" color="fg">{def.meaning}</Text>

                  {def.meta && (
                     <Badge
                       fontSize="xs"
                       textTransform="uppercase"
                       fontWeight="bold"
                       color="fg.muted"
                       mx={1.5}
                       letterSpacing="wider"
                       border="1px solid"
                       borderColor="border"
                       px={1}
                       rounded="sm"
                       verticalAlign="middle"
                       display="inline-block"
                       textIndent="0"
                     >
                       {def.meta.join(' ')}
                     </Badge>
                  )}

                  {def.example && (
                    <Text as="span" color="fg.muted" opacity={0.8} ml={1} fontWeight="medium" display="inline-block" textIndent="0">
                      &lt;{def.example}&gt;
                    </Text>
                  )}

                  {def.synonyms && (
                     <Text as="span" display="block" fontSize="sm" color="fg.muted" textTransform="uppercase" fontWeight="bold" letterSpacing="wide" mt={0.5} ml={4} textIndent="0">
                       Syn: {def.synonyms.join(', ')}
                     </Text>
                  )}
                </Box>
             ))}
           </VStack>

           <Box mt={4} pt={2} borderTop="1px dotted" borderColor="fg" opacity={0.3} fontSize="base" color="fg.muted" lineHeight="tight">
             <Text as="span" fontWeight="bold" fontSize="xs" textTransform="uppercase" letterSpacing="widest" mr={2} color="fg">Origin</Text>
             <Text as="span" fontStyle="italic" fontFamily="serif" opacity={0.8}>{'{'} {data.etymology} {'}'}</Text>
           </Box>
        </Box>
      </Box>
    );
  }

  // ACADEMIC MODE
  return (
    <Box
      bg="surface"
      p={{ base: 6, md: 10 }}
      rounded="sm"
      shadow="sm"
      border="1px solid"
      borderColor="border"
      fontFamily="serif"
      transition="colors 0.3s"
    >
       <Box borderLeft="4px solid" borderColor="accent.fg" pl={6}>
        <Box mb={4}>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="bold"
            color="accent.fg"
            display="inline-block"
            mr={3}
          >
            {data.word}
          </Heading>
          <Text
            as="sup"
            fontSize="xs"
            fontWeight="bold"
            color="accent.fg"
            verticalAlign="top"
            top={0}
            border="1px solid"
            borderColor="accent.fg"
            rounded="full"
            w={4}
            h={4}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            mr={2}
          >
            1
          </Text>
          <Text as="span" color="fg.muted" fontStyle="italic" fontSize="lg">
             {data.pronunciation}
          </Text>
        </Box>

        <Text fontSize="sm" color="fg.muted" mb={6} lineHeight="relaxed">
          <Text as="span" color="accent" fontWeight="bold" mr={1}>Ety.</Text>
          {data.etymology}
        </Text>

        <VStack align="stretch" gap={4}>
          {data.definitions.map((def, idx) => (
            <Box key={def.id} color="fg" lineHeight="snug">
               <Text as="span" fontWeight="bold" color="accent" mr={2}>{idx + 1}.</Text>

               <Text as="span" fontStyle="italic" color="accent" fontWeight="medium" mr={2} title="Part of Speech">
                 {def.partOfSpeech}
               </Text>

               {def.meta && (
                 <Badge
                   bg="canvas"
                   color="fg.muted"
                   border="1px solid"
                   borderColor="border"
                   fontSize="xs"
                   px={1.5}
                   py={0.5}
                   rounded="sm"
                   mr={2}
                   textTransform="uppercase"
                   letterSpacing="tight"
                 >
                   {def.meta.join(', ')}
                 </Badge>
               )}

               <Text as="span" fontSize="lg">
                 {def.meaning}
               </Text>

               {def.synonyms && (
                 <Box mt={1} ml={6} fontSize="sm">
                   <Text as="span" fontWeight="bold" color="fg.muted" fontSize="xs" textTransform="uppercase" mr={2}>Syn:</Text>
                   <Text as="span" color="accent.fg" _hover={{ textDecoration: 'underline' }} cursor="pointer">
                     {def.synonyms.join(', ')}
                   </Text>
                 </Box>
               )}

               {def.antonyms && (
                 <Box mt={1} ml={6} fontSize="sm">
                   <Text as="span" fontWeight="bold" color="accent" fontSize="xs" textTransform="uppercase" mr={2}>Ant:</Text>
                   <Text as="span" color="accent.fg" _hover={{ textDecoration: 'underline' }} cursor="pointer">
                     {def.antonyms.join(', ')}
                   </Text>
                 </Box>
               )}
            </Box>
          ))}
        </VStack>

        <HStack mt={8} pt={4} borderTop="1px solid" borderColor="border" gap={4} fontSize="xs" fontFamily="sans" fontWeight="bold" color="accent.fg" textTransform="uppercase" letterSpacing="widest">
           <Button variant="ghost" size="xs" colorPalette="blue" textTransform="uppercase" fontWeight="bold" letterSpacing="widest">Conjugate</Button>
           <Button variant="ghost" size="xs" colorPalette="blue" textTransform="uppercase" fontWeight="bold" letterSpacing="widest">Citation</Button>
           <Button variant="ghost" size="xs" colorPalette="blue" textTransform="uppercase" fontWeight="bold" letterSpacing="widest">Share</Button>
        </HStack>
      </Box>
    </Box>
  );
};
