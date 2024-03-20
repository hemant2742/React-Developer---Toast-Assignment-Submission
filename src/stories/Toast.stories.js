import React from 'react';
import App from '../App';
import Toast from '../components/toast';

export default {
    title: 'Components/App',
    component: App,
    argTypes: {
        hideInfoIcon: {
            control: 'boolean',
            description: 'Toggle visibility of the info icon',
        },
        notificationIcon: {
            control: {
                type: 'select',
            },
            options: ['information', 'error', 'warning', 'success'],

            description: 'Type of notification icon to display',
        },
    },
};

const Template = (args) =>
    <App {...args}>
        <Toast {...args} />
    </App>;

export const Default = Template.bind({});
Default.args = {
    message: 'Message here',
    notificationIcon: 'information',
};

export const DisplayType = Template.bind({});
DisplayType.args = {
    message: 'Message here',
    hideInfoIcon: true,
    withoutAction: true,
    withoutDivider: true,
    crossIcon: true,
    notificationIcon: 'information',
};
export const StatusType = Template.bind({});
StatusType.args = {
    message: 'Message here',
    notificationIcon: 'error',
};
StatusType.argTypes = {
    message: { control: 'text' },
    notificationIcon: { control: { type: 'select', options: ['information', 'error', 'warning', 'success'] } },
    hideInfoIcon: { table: { disable: true } },
};



DisplayType.argTypes = {
    notificationIcon: { table: { disable: true } },
};