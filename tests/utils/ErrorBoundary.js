import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, message: undefined };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, message: error.message });
    }

    render() {
        if (this.state.hasError) {
            return <p>{this.state.message}</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;