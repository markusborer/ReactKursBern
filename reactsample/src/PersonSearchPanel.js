import React from 'react';
import PersonSearchForm from './PersonSearchForm';
import PersonSearchResult from './PersonSearchResult';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';
import { fromEvent, of } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators'
import { Modal } from 'react-materialize';

class PersonSearchPanel extends React.Component {

    eventTarget = new EventTarget();

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            error: undefined
        }
    }

    componentDidMount() {
        fromEvent(this.eventTarget, "OnChange")
            .pipe(
                debounceTime(200),
                //filter(event => event.detail.length > 3),
                switchMap(event => {
                    console.log('Event: ' + event.detail);
                    return axios.get('http://localhost:8080/person?name=' + event.detail).catch(error => {
                        console.log(error);
                        this.setState({
                            error: 'Fehler bei der Serverabfrage'
                        });
                        return of(undefined);
                    });
                })
            )
            .subscribe(response => {
                if (response.data !== undefined) {
                    console.log('Response: ' + response);
                    this.setState({
                        persons: response.data,
                        error: undefined
                    });
                }
            });
    }

    onChange = (text) => {
        this.eventTarget.dispatchEvent(
            new CustomEvent('OnChange', { detail: text })
        );
    }

    render() {
        return (
            <ErrorBoundary>
                <h2 className="left-align">Personensuche</h2>
                <PersonSearchForm onChange={this.onChange} />
                {this.state.error === undefined && <PersonSearchResult persons={this.state.persons} />}
                {this.state.error !== undefined && <Modal header='Error' open='true'>{this.state.error}</Modal>}
            </ErrorBoundary>
        )
    }
}

export default PersonSearchPanel;
