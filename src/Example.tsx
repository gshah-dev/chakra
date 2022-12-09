import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './chakra';
import { Bar } from './components';

export type ExampleProps = {
  children?: React.ReactNode;
};

export function Example(props: ExampleProps) {
  return (
    <ChakraProvider theme={theme}>
      <Bar>{props.children}</Bar>
    </ChakraProvider>
  );
}
