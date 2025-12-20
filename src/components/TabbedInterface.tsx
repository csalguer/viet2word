import React from 'react';
import { 
  Tabs, 
  Box 
} from '@chakra-ui/react';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabbedInterfaceProps {
  items: TabItem[];
}

export const TabbedInterface: React.FC<TabbedInterfaceProps> = ({ items }) => {
  return (
    <Box width="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Tabs.Root variant="enclosed" colorPalette="teal" fitted>
        <Tabs.List mb="1em" bg="gray.50" _dark={{ bg: 'gray.700' }}>
          {items.map((item, index) => (
            <Tabs.Trigger key={index} value={index.toString()} fontWeight="bold">{item.label}</Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.ContentGroup>
          {items.map((item, index) => (
            <Tabs.Content key={index} value={index.toString()}>
              {item.content}
            </Tabs.Content>
          ))}
        </Tabs.ContentGroup>
      </Tabs.Root>
    </Box>
  );
};
