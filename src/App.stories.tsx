import React from 'react';
import { Story, Meta } from '@storybook/react';

import { App } from './App';

export default {
    title: 'MyComponent',
    component: App,
} as Meta;

const Template: Story = (args: any) => <App {...args} />;



export const Default = Template.bind({});
Default.args = {
    text: 'Hello, Storybook! AWADHESH CHAKIA',
};
