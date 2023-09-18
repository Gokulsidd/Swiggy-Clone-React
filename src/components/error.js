import { useRouteError } from 'react-router-dom';

const ErrorMessage = () => {
    const error = useRouteError();

    return (
        <>
        <div className="error-message">{error.ErrorMessage}</div>
        </>
    )
};

export default ErrorMessage