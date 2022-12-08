import React from 'react';
import { Heading, ChakraProvider } from '@chakra-ui/react';
import { theme } from './chakra';

export type ExampleProps = {
  text?: String;
};

export function Example(props: ExampleProps) {
  return (
    <ChakraProvider theme={theme}>
      <Heading as="h1" color="brand.400">{props.text}</Heading>
    </ChakraProvider>
  );
}
