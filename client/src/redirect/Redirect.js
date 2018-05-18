import React from 'react';

const Redirect = props => {
    return (
        < div >
            Redirecting...
            {props.history.push('/signin')}
        </div >
    )
}

export default Redirect;