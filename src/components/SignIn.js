/* eslint-disable */

import React, {useState} from 'react'

export const SignIn = () => {
    const [backgroundColor, setBackgroundColor] = useState('red')


    return (
        <button
            style={{ backgroundColor }}
            onClick={() => setBackgroundColor(backgroundColor === 'red' ? 'blue' : 'red')}
        >
            A button
        </button>
    )
}


export class SignInClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { backgroundColor: 'red' }
    }

    toggleBackground() {
        const backgroundColor = this.state.backgroundColor === 'red' ? 'blue' : 'red'
        this.setState({ backgroundColor: backgroundColor})
    }

    render() {
        console.log('rerender')
        return (
            <button
                onClick={() => this.toggleBackground()}
                style={{ backgroundColor: this.state.backgroundColor }}
            >
                hallo
            </button>
        )
    }
}
