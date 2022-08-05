
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    // console.log(users); 
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDelete = (id) => {
        const ensure = window.confirm('Are you sure deleted user?');
        if (ensure) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted user information');
                        const remaining = users.filter(userr => userr._id !== id);
                        setUsers(remaining);
                    }
                })
        }
        else {
            alert('Congratulation!!');
        }
    }
    return (
        <div className="wrapper">
            <div className="container">
                <h2>Users Available: {users.length} </h2>

                {
                    users.length === 0 ? <h4>Loading....</h4> :
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {
                                users.map(user => <div
                                    key={user._id}
                                >
                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title"> {user.name}</h5>
                                                <p className="card-text"> {user.email}</p>
                                                <Link to={`/user/update/${user._id}`}><button className="bg-info">Update</button></Link>
                                                <button onClick={() => handleDelete(user._id)} className='bg-danger'>Delete</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default Users;