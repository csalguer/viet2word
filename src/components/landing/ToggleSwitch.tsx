import React from 'react';
import { Button, HStack, Box } from '@chakra-ui/react';
import { LayoutMode } from './types';

interface ToggleSwitchProps {
  mode: LayoutMode;
  onChange: (mode: LayoutMode) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ mode, onChange }) => {
  return (
    <HStack
      gap={{ base: 1, sm: 2 }}
      bg="subtle"
      p={1.5}
      rounded="full"
      border="1px solid"
      borderColor="border"
      w="fit-content"
      transition="colors 0.3s"
      overflowX="auto"
    >
      <Button
        size="sm"
        onClick={() => onChange('editorial')}
        rounded="full"
        fontSize={{ base: 'xs', sm: 'sm' }}
        fontWeight="medium"
        transition="all 0.3s"
        bg={mode === 'editorial' ? 'fg' : 'transparent'}
        color={mode === 'editorial' ? 'fg.inverse' : 'fg.muted'}
        shadow={mode === 'editorial' ? 'md' : 'none'}
        _hover={{
          bg: mode === 'editorial' ? 'fg' : 'transparent',
          color: mode === 'editorial' ? 'fg.inverse' : 'fg',
        }}
      >
        Editorial
      </Button>
      <Button
        size="sm"
        onClick={() => onChange('academic')}
        rounded="full"
        fontSize={{ base: 'xs', sm: 'sm' }}
        fontWeight="medium"
        transition="all 0.3s"
        bg={mode === 'academic' ? 'accent.fg' : 'transparent'}
        color={mode === 'academic' ? 'white' : 'fg.muted'}
        shadow={mode === 'academic' ? 'md' : 'none'}
        _hover={{
          bg: mode === 'academic' ? 'accent.fg' : 'transparent',
          color: mode === 'academic' ? 'white' : 'fg',
        }}
      >
        Academic
      </Button>
      <Button
        size="sm"
        onClick={() => onChange('modern')}
        rounded="full"
        fontSize={{ base: 'xs', sm: 'sm' }}
        fontWeight="medium"
        transition="all 0.3s"
        bg={mode === 'modern' ? 'earth.400' : 'transparent'}
        color={mode === 'modern' ? 'white' : 'fg.muted'}
        shadow={mode === 'modern' ? 'md' : 'none'}
        _hover={{
          bg: mode === 'modern' ? 'earth.400' : 'transparent',
          color: mode === 'modern' ? 'white' : 'fg',
        }}
        _dark={{
          bg: mode === 'modern' ? 'earth.600' : 'transparent',
          _hover: {
            bg: mode === 'modern' ? 'earth.600' : 'transparent',
          }
        }}
      >
        Modern
      </Button>
    </HStack>
  );
};
