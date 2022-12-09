import React from 'react';
import type { BoxProps, ModalProps } from '@chakra-ui/react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

type CustomModalProps = {
  allowClose: boolean;
  bg?: string;
  footer?: React.ReactNode; // type props as: React.ComponentType<ComponentProps>
  handler?: {
    action: (event: React.MouseEventHandler<HTMLButtonElement>) => void;
    label: string;
  };
  hasSubmit: boolean;
  noOverlay?: boolean;
  title?: string;
};

export function CHModal({
  allowClose = true,
  bg = 'white',
  children,
  footer,
  noOverlay = false,
  onClose,
  isOpen,
  title = '',
  ...rest
}: ModalProps & BoxProps & CustomModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onEsc={onClose}
      border="2px solid blue"
      motionPreset="slideInBottom"
      blockScrollOnMount={false}
      size="2xl"
      isCentered
      {...rest}
    >
      {!noOverlay && <ModalOverlay />}
      <ModalContent bg={bg}>
        <ModalHeader textTransform="capitalize">{title}</ModalHeader>
        {allowClose && <ModalCloseButton />}
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {footer}
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
