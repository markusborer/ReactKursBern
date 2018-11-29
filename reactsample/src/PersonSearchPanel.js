import React from 'react';
import PersonSearchForm from './PersonSearchForm';
import PersonSearchResult from './PersonSearchResult';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators'

class PersonSearchPanel extends React.Component {

    eventTarget = new EventTarget();

    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        fromEvent(this.eventTarget, "OnChange")
            .pipe(
                debounceTime(200),
                //filter(event => event.detail.length > 3),
                switchMap(event => {
                    console.log('Event: ' + event.detail);
                    return axios.get('http://localhost:8080/person?name=' + event.detail);
                })
            )
            .subscribe(response => {
                console.log('Response: ' + response);
                this.setState({persons: response.data});
            });
    }

    onChange = (text) => {
        this.eventTarget.dispatchEvent(
            new CustomEvent('OnChange', { detail: text })
        );
    }

    /*
    onChange = (text) => {
        axios.get('http://localhost:8080/person?name=' + text)
            .then(res => {
                this.setState({persons: res.data});
            })
    }
    */

    render() {
        return (
            <ErrorBoundary>
                <h2 className="left-align">Personensuche</h2>
                <PersonSearchForm onChange={this.onChange} />
                <PersonSearchResult persons={this.state.persons} />
            </ErrorBoundary>
        )
    }
}

export default PersonSearchPanel;
