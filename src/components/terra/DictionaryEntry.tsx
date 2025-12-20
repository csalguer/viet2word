import { Box, Text, Stack, Group, Title, Badge, Button, Card } from '@mantine/core';
import { useThemeMode } from '../../styles/ThemeModeContext';

interface Definition {
  id: string;
  partOfSpeech: string;
  meaning: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
  meta?: string[];
}

interface DictionaryEntryProps {
  data: {
    word: string;
    pronunciation: string;
    etymology: string;
    definitions: Definition[];
  };
}

export const DictionaryEntry = ({ data }: DictionaryEntryProps) => {
  const { mode } = useThemeMode();

  if (mode === 'editorial') {
    return (
      <Card
        bg="white"
        p={{ base: 'md', md: 'xl' }}
        maw="48rem"
        mx="auto"
        shadow="sm"
        radius="md"
        withBorder
        style={{ borderTop: "4px solid var(--mantine-color-orange-6)" }}
      >
        <Stack gap="md">
          <Box>
            <Group align="baseline" gap="xs">
              <Title order={1} fz={{ base: '2.25rem', md: '3rem' }} fw={900} style={{ fontFamily: 'serif' }}>
                {data.word}
              </Title>
              <Text c="dimmed" fs="italic" fz="lg">
                /{data.pronunciation}/
              </Text>
            </Group>
          </Box>

          <Box bg="gray.0" p="md" style={{ borderRadius: 'var(--mantine-radius-md)', borderLeft: '4px solid var(--mantine-color-orange-6)' }}>
            <Text fw="bold" fz="xs" tt="uppercase" style={{ letterSpacing: '0.1em' }} c="orange.6" mb={4}>
              Origin Story
            </Text>
            <Text style={{ fontFamily: 'serif' }} fz="md" lh="1.6">
              {data.etymology}
            </Text>
          </Box>

          <Stack gap="md" mt="xs">
            {data.definitions.map((def, idx) => (
              <Box key={def.id}>
                <Box style={{ fontFamily: 'serif' }} lh="1.4">
                  <Text span fw="bold" c="orange.6" mr="xs">
                    {idx + 1}.
                  </Text>
                  <Text span fw="bold" fs="italic" c="dimmed" mr="xs">
                    {def.partOfSpeech}
                  </Text>

                  {def.meta && (
                    <Badge
                      variant="outline"
                      color="gray"
                      size="sm"
                      mr="xs"
                      tt="uppercase"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {def.meta.join(', ')}
                    </Badge>
                  )}

                  <Text span>{def.meaning}</Text>
                </Box>

                {def.example && (
                  <Box mt={6} ml="xl" pl="md" style={{ borderLeft: '2px solid var(--mantine-color-gray-3)' }}>
                    <Text style={{ fontFamily: 'serif' }} fs="italic" c="dimmed" fz="md">
                      "{def.example}"
                    </Text>
                  </Box>
                )}
              </Box>
            ))}
          </Stack>
        </Stack>
      </Card>
    );
  }

  if (mode === 'modern') {
    return (
      <Card
        bg="white"
        p={{ base: 'md', md: 'xl' }}
        maw="48rem"
        mx="auto"
        shadow="sm"
        radius="md"
        withBorder
        style={{ borderTop: "4px solid var(--mantine-color-dark-9)" }}
      >
        <Box fz="lg">
           <Box lh="1.6">
             <Text
               span
               fz="3rem"
               fw="bold"
               c="dark"
               style={{ letterSpacing: "-0.025em" }}
               lh={1}
               mr="xs"
             >
              {data.word}
             </Text>

             <Text span c="dimmed" style={{ whiteSpace: 'nowrap' }} mr="xs">
               \{data.pronunciation.replace(/\//g, '')}             </Text>

             <Text span fs="italic" fw="bold" c="dimmed" mr="xs">
               n
             </Text>
           </Box>

           <Stack gap="xs" mt="xs">
             {data.definitions.map((def, idx) => (
                <Box key={def.id} pl="1.5em" style={{ textIndent: '-1.5em' }}>
                  <Text span fw="bold" c="dark" mr={4}>{idx + 1}</Text>
                  <Text span fs="italic" fw="bold" c="dimmed" mr={4}>{def.partOfSpeech}</Text>
                  <Text span fw="bold" mr="xs">:</Text>
                  <Text span c="dark">{def.meaning}</Text>

                  {def.meta && (
                     <Badge
                       size="xs"
                       tt="uppercase"
                       fw="bold"
                       color="gray"
                       variant="outline"
                       mx={6}
                       style={{ letterSpacing: "0.05em", verticalAlign: 'middle', display: 'inline-block', textIndent: 0 }}
                     >
                       {def.meta.join(' ')}
                     </Badge>
                  )}

                  {def.example && (
                    <Text span c="dimmed" opacity={0.8} ml={4} fw="medium" style={{ display: 'inline-block', textIndent: 0 }}>
                      &lt;{def.example}&gt;
                    </Text>
                  )}

                  {def.synonyms && (
                     <Text span display="block" fz="sm" c="dimmed" tt="uppercase" fw="bold" style={{ letterSpacing: '0.025em', textIndent: 0 }} mt={2} ml="lg">
                       Syn: {def.synonyms.join(', ')}
                     </Text>
                  )}
                </Box>
             ))}
           </Stack>

           <Box mt="lg" pt="xs" style={{ borderTop: '1px dotted var(--mantine-color-dark-9)', opacity: 0.3 }} fz="md" c="dimmed" lh="1.2">
             <Text span fw="bold" fz="xs" tt="uppercase" style={{ letterSpacing: '0.1em' }} mr="xs" c="dark">Origin</Text>
             <Text span fs="italic" style={{ fontFamily: 'serif' }} opacity={0.8}>{'{'} {data.etymology} {'}'}</Text>
           </Box>
        </Box>
      </Card>
    );
  }

  // ACADEMIC MODE
  return (
    <Card
      bg="white"
      p={{ base: 'md', md: 'xl' }}
      radius="sm"
      shadow="sm"
      withBorder
      style={{ fontFamily: 'serif', transition: 'colors 0.3s' }}
    >
       <Box style={{ borderLeft: '4px solid var(--mantine-color-blue-8)' }} pl="lg">
        <Box mb="md">
          <Title
            order={1}
            fz={{ base: '2.25rem', md: '3rem' }}
            fw="bold"
            c="blue.8"
            style={{ display: 'inline-block' }}
            mr="xs"
          >
            {data.word}
          </Title>
          <Text
            span
            fz="xs"
            fw="bold"
            c="blue.8"
            style={{
                verticalAlign: 'top',
                border: '1px solid var(--mantine-color-blue-8)',
                borderRadius: '50%',
                width: '1rem',
                height: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            mr="xs"
          >
            1
          </Text>
          <Text span c="dimmed" fs="italic" fz="lg">
             {data.pronunciation}
          </Text>
        </Box>

        <Text fz="sm" c="dimmed" mb="lg" lh="1.6">
          <Text span c="blue.6" fw="bold" mr={4}>Ety.</Text>
          {data.etymology}
        </Text>

        <Stack gap="md">
          {data.definitions.map((def, idx) => (
            <Box key={def.id} c="dark" lh="1.4">
               <Text span fw="bold" c="blue.6" mr="xs">{idx + 1}.</Text>

               <Text span fs="italic" c="blue.6" fw="medium" mr="xs" title="Part of Speech">
                 {def.partOfSpeech}
               </Text>

               {def.meta && (
                 <Badge
                   bg="white"
                   c="dimmed"
                   variant="outline"
                   size="xs"
                   radius="sm"
                   mr="xs"
                   tt="uppercase"
                   style={{ letterSpacing: '-0.025em' }}
                 >
                   {def.meta.join(', ')}
                 </Badge>
               )}

               <Text span fz="lg">
                 {def.meaning}
               </Text>

               {def.synonyms && (
                 <Box mt={4} ml="xl" fz="sm">
                   <Text span fw="bold" c="dimmed" fz="xs" tt="uppercase" mr="xs">Syn:</Text>
                   <Text span c="blue.8" style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                     {def.synonyms.join(', ')}
                   </Text>
                 </Box>
               )}

               {def.antonyms && (
                 <Box mt={4} ml="xl" fz="sm">
                   <Text span fw="bold" c="blue.6" fz="xs" tt="uppercase" mr="xs">Ant:</Text>
                   <Text span c="blue.8" style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                     {def.antonyms.join(', ')}
                   </Text>
                 </Box>
               )}
            </Box>
          ))}
        </Stack>

        <Group mt="xl" pt="md" style={{ borderTop: '1px solid var(--mantine-color-gray-3)', letterSpacing: '0.1em' }} gap="md" fz="xs" fw="bold" c="blue.8" tt="uppercase">
           <Button variant="subtle" size="xs" color="blue" tt="uppercase" fw="bold" style={{ letterSpacing: '0.1em' }}>Conjugate</Button>
           <Button variant="subtle" size="xs" color="blue" tt="uppercase" fw="bold" style={{ letterSpacing: '0.1em' }}>Citation</Button>
           <Button variant="subtle" size="xs" color="blue" tt="uppercase" fw="bold" style={{ letterSpacing: '0.1em' }}>Share</Button>
        </Group>
      </Box>
    </Card>
  );
};
