import React from 'react';
import {withInfo} from '@storybook/addon-info';
import '../widgets/example-one/dist/web-component-with-libs';
import '../widgets/example-two/dist/web-component-with-libs';

window.test = () => {
    alert(1)
};

export default {
    title: 'Example web component story',
    decorators: [withInfo],
    parameters: {
        info: {
            inline: true
        }
    }
};

export const exampleOne = () => <example-one text="Some text" onButtonClick="test"></example-one>;
export const exampleTwo = () => <example-two></example-two>;
export const componentsCommunicating = () => (
    <div>
        <example-one text="Some text"></example-one>
        <br/><br/><br/>
        <example-two></example-two>
    </div>
);
