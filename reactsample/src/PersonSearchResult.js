import React from 'react';
import PersonSearchForm from "./PersonSearchForm";
import { Table } from 'react-materialize';

class PersonSearchResult extends React.Component {
    render() {
        let rows = this.props.persons.map(person => {
            return <PersonRow key={person.id} person={person}/>
        });
        return (
            <Table hoverable="true">
                <thead>
                    <PersonSearchHeader />
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        )
    }
}

function PersonSearchHeader() {
    return (
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Vorname</th>
        </tr>
    )
}

const PersonRow = (props) => {
    if (props.person.name === 'XXX1') {
        throw new Error('I crashed');
    }
    return (
        <tr>
            <td>{props.person.id}</td>
            <td>{props.person.name}</td>
            <td>{props.person.vorname}</td>
        </tr>
    )
}

export default PersonSearchResult;
