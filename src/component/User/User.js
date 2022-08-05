import React from 'react';
import './User.css';

const User = (props) => {

    // console.log(users);
    const user = props.user;
    const { name, email } = user;

    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title"> {name}</h5>
                        <p className="card-text"> {email}</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default User;