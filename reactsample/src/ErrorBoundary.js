import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
            }
        );
    }

    render() {
        if (this.state.errorInfo) {
            return <p>Es ist ein Fehler aufgetreten</p>
        } else {
            return this.props.children;
        }
    }

}

export default ErrorBoundary;