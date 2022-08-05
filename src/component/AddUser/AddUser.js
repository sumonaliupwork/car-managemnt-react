import { useRef } from 'react';
import './AddUser.css';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    // handle user form
    const handleForm = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name: name, email: email };
        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successful Added User');
                    e.target.reset();
                }
            })

    }

    return (
        <div className='container'>

            <form onSubmit={handleForm} className='mx-auto w-50'>
                <h2 className='text-secondary pb-3'>Enlist User Information.</h2>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" ref={nameRef} className="form-control" id="inputEmail3" placeholder='Type Name' />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" ref={emailRef} className="form-control" id="inputPassword3" placeholder='Type E-mail' required />
                    </div>
                </div>

                <button type="submit" className="btn btn-lg btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddUser; <h2>this is add user</h2>