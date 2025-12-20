import { SegmentedControl, Group, Text } from '@mantine/core';
import { useThemeMode, ThemeMode } from '../../styles/ThemeModeContext';

export const ThemeToggle = () => {
  const { mode, setMode } = useThemeMode();

  return (
    <Group>
      <Text size="sm" fw={500}>Theme:</Text>
      <SegmentedControl
        value={mode}
        onChange={(value) => setMode(value as ThemeMode)}
        data={[
          { label: 'Editorial', value: 'editorial' },
          { label: 'Modern', value: 'modern' },
          { label: 'Academic', value: 'academic' },
        ]}
      />
    </Group>
  );
};
