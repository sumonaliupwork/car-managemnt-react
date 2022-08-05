import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    // handle event user information
    const handleUpdate = (e) => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successful User Update !!');
                    setUser({});
                }
            })
        e.preventDefault();
    }
    // user name change
    const handleNameChange = (e) => {
        const nameUpdate = e.target.value;
        const updateChange = { name: nameUpdate, email: user.email };
        setUser(updateChange);
    }
    // user email change
    const handleEmailChange = (e) => {
        const emailUpdate = e.target.value;
        const updateEmail = { name: user.name, email: emailUpdate };
        setUser(updateEmail);
    }
    return (
        <div>
            <h3 className="text-secondary"><span className="text-secondary">Order ID: </span > <span className='text-primary'> {id}</span>  </h3>
            {
                !user.email ? <h3>User Loading.....</h3> :
                    <div>
                        <h4>Update User: {user.name} </h4>
                        <h4>Update Email: {user.email} </h4>
                    </div>
            }
            <form onSubmit={handleUpdate}>
                <input type="text" onChange={handleNameChange} value={user.name || ''} />
                <input type="email" onChange={handleEmailChange} value={user.email || ''} />
                <input type="submit" value="Update" />
            </form>



        </div>
    );
};

export default UpdateUser;