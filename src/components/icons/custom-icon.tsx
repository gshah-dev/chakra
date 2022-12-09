import React from 'react';
import { Box, type BoxProps, type ChakraProps } from '@chakra-ui/react';
import { paths } from './paths';

type CustomIconProps = {
  color?: string;
  icon: string;
  size: string | number | string[] | number[];
  stroke?: string;
} & BoxProps;

const Icon: React.FC<CustomIconProps & ChakraProps> = ({
  color,
  size,
  icon,
  stroke,
  ...rest
}) => (
  <Box
    as="svg"
    viewBox={paths[icon]?.viewBox}
    width={size}
    height={size}
    fill={color}
    stroke={stroke}
    {...rest}
  >
    {paths[icon]?.d.map((d: string, i: number) => (
      // eslint-disable-next-line react/no-array-index-key
      <path key={i} d={d} transform={paths[icon]?.transform} />
    ))}
  </Box>
);
export function CustomIcon({
  color,
  icon = 'add',
  size = '1.25rem',
  stroke,
  ...rest
}: CustomIconProps) {
  return (
    <Icon color={color} size={size} icon={icon} stroke={stroke} {...rest} />
  );
}
