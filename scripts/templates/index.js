export default name => {
    return `import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = props => {
    return (
        <div>
            ${name}
        </div>
    );
};

MyComponent.propTypes = {
    
};

export default MyComponent;
`
}
