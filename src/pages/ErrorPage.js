import React from 'react';

export default ErrorPage;

function ErrorPage(props) {
    return (
        <article>
            <h1>Error!</h1>
            {props.children}
        </article>
    );
}