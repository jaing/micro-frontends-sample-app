import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class MyComponent extends Component {
    render() {
        return (
            <div className="example-one">
                <div>
                    My Sample React Component
                </div>
                <div>
                    Text: {this.props.text}
                </div>
                <button onClick={this.onClick}>
                    OK
                </button>
            </div>
        );
    }

    onClick = () => {
        this.dispatchEvent();

        return this.props.onButtonClick && this.props.onButtonClick('clicked');
    };

    dispatchEvent = () => {
        const onClickEvent = new CustomEvent('widgets__on-click', {
            detail: {
                text: this.props.text
            },
        });

        window && window.dispatchEvent(onClickEvent);
    };
}

MyComponent.propTypes = {
    text: PropTypes.string,

    onButtonClick: PropTypes.func,
};

export default MyComponent;
