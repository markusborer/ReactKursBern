import React from 'react';

class PersonSearchForm extends React.Component {

    onKeyUp = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <span>Name: </span>
                <input onKeyUp={this.onKeyUp}/>
            </div>
        )
    }
}

export default PersonSearchForm;
