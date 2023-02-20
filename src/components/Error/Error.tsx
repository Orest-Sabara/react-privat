import { Component } from 'react';

import { StyledTypography } from './typographyStyled';

interface ErrorBoundaryProps {
    children: JSX.Element;
}

export class Error extends Component<ErrorBoundaryProps> {
    state = {
        hasError: false,
        error: '',
    };

    constructor(props: ErrorBoundaryProps) {
        super(props);
    }

    static getDerivedStateFromError(error: string) {
        return { hasError: true, error };
    }

    render() {
        const { hasError, error } = this.state;

        if (hasError) {
            return <StyledTypography>{error.toString()}</StyledTypography>;
        }

        return this.props.children;
    }
}


