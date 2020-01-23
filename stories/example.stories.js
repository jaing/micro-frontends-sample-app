import React from 'react';
import { withInfo } from '@storybook/addon-info';
import ExampleOne from '../widgets/example-one';
import ExampleTwo from '../widgets/example-two';
import '../widgets/example-one/dist/index.css';

export default {
    title: 'Example story',
    decorators: [withInfo],
    parameters: {
        info: {
            inline: true
        }
    }
};

export const exampleOne = () => <ExampleOne text="Some text" onButtonClick={() => alert(1)} />;
export const exampleTwo = () => <ExampleTwo />;
export const componentsCommunicating = () => (
    <div>
        <ExampleOne text="Some text" onButtonClick={() => console.log(2)} />
        <br/><br/><br/>
        <ExampleTwo />
    </div>
);
