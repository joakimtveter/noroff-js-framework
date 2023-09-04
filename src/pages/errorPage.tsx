import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        return (
            <>
                <Helmet>
                    <title>
                        {error.status} {error.statusText} - Error Page
                    </title>
                </Helmet>
                <div id='error-page'>
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>
                            {error.status} {error.statusText}
                        </i>
                    </p>
                </div>
            </>
        );
    }

    return <p>{'Unknown Error'}</p>;
}

export default ErrorPage;
