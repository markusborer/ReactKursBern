import React from 'react';
import { Input } from 'react-materialize';

class PersonSearchForm extends React.Component {

    onKeyUp = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <Input label="Name" onKeyUp={this.onKeyUp}/>
            </div>
        )
    }
}

export default PersonSearchForm;
