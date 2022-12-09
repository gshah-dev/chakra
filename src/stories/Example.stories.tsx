import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Example } from '../Example';

export default {
  title: 'Example',
  component: Example,
  argTypes: {},
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: <>Test</>,
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: <>Test2</>,
};
