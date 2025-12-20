import { Box, SimpleGrid, Title, Text, Group, Stack } from '@mantine/core';
import { PALETTE } from '../../styles/terra/design-system';

const ColorSwatch = ({ name, hex, bg }: { name: string; hex: string; bg: string }) => (
  <Stack gap="xs">
    <Box h={64} w="100%" style={{ borderRadius: 'var(--mantine-radius-md)', backgroundColor: bg, border: '1px solid var(--mantine-color-gray-3)' }} />
    <Box fz="xs" c="dimmed" style={{ fontFamily: 'monospace' }}>
      <Text span fw="bold" display="block" c="dark">{name}</Text>
      {hex}
    </Box>
  </Stack>
);

export const PaletteGuide = () => {
  return (
    <Box component="section" mb={64} style={{ borderTop: '1px solid var(--mantine-color-gray-3)' }} pt="xl">
      <Group justify="space-between" align="flex-end" mb="md">
        <Title order={3} fz="sm" style={{ fontFamily: 'sans-serif', letterSpacing: '0.1em' }} fw="bold" c="dark" tt="uppercase">
          Earth Tone System
        </Title>
        <Text fz="xs" style={{ fontFamily: 'monospace' }} c="dimmed">Source: design-system.ts</Text>
      </Group>

      <SimpleGrid cols={{ base: 2, md: 5 }} spacing="md">
        <ColorSwatch name="Paper (50)" hex={PALETTE.earth[50]} bg={PALETTE.earth[50]} />
        <ColorSwatch name="Bone (200)" hex={PALETTE.earth[200]} bg={PALETTE.earth[200]} />
        <ColorSwatch name="Taupe (400)" hex={PALETTE.earth[400]} bg={PALETTE.earth[400]} />
        <ColorSwatch name="Walnut (600)" hex={PALETTE.earth[600]} bg={PALETTE.earth[600]} />
        <ColorSwatch name="Charcoal (800)" hex={PALETTE.earth[800]} bg={PALETTE.earth[800]} />
      </SimpleGrid>
      <SimpleGrid cols={{ base: 2, md: 5 }} spacing="md" mt="md">
        <ColorSwatch name="Clay (500)" hex={PALETTE.clay[500]} bg={PALETTE.clay[500]} />
        <ColorSwatch name="Ink Blue" hex={PALETTE.ink.blue} bg={PALETTE.ink.blue} />
        <ColorSwatch name="Obsidian (900)" hex={PALETTE.earth[900]} bg={PALETTE.earth[900]} />
         <ColorSwatch name="Void (950)" hex={PALETTE.earth[950]} bg={PALETTE.earth[950]} />
      </SimpleGrid>
    </Box>
  );
};
