import React, { Component } from 'react';

// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.

export default class Keypad extends Component {

    handleKeyUp = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <form>
                <input
                 onKeyUp={this.handleKeyUp}
                 type="password"
                />
            </form>
        )
    }
}

