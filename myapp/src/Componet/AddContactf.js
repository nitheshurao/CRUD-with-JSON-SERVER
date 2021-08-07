import React, { useState } from 'react'
// import addContactHandler from '../App'
function AddContactf({ addContactHandler }) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        addContactHandler({ name, email });
        setName("");
        setEmail('');
        this.props.history.pushState("/");

    }
    return (
        <div>
            <form onSubmit={add}>
                <label>Name</label>
                <input type="text" placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <button > add</button>

            </form>

        </div>
    )
}

export default AddContactf
