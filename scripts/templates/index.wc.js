export default name => {
    return `import { define, render, property } from 'hybrids';
import React from 'react';
import ReactDOM from 'react-dom';
import Component from './index';

function reactify(fn) {
    return render(
        (host) => {
            const Component = fn(host);
            return (host, target) => ReactDOM.render(Component, target);
        },
        { shadowRoot: false },
    );
}

const ReactComponent = {
    text: property(''),
    onbuttonclick: property(''),

    render: reactify(({ text, onbuttonclick }) => {
        const onButtonClickMethod = window[onbuttonclick];

        return (
            <Component onButtonClick={onButtonClickMethod} text={text} />
        );
    }),
};

define('${name}', ReactComponent);
`
}
