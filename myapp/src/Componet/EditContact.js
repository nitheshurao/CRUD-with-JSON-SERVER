import React, { useState } from 'react'
// import addContactHandler from '../App'
function EditContact(props) {
    // const { id, name, email } = props.location.state.contact;
    // console.log(props.contact.id)
    const [id, setId] = useState(props.location.state.contact.id);
    const [name, setName] = useState(props.location.state.contact.name);
    const [email, setEmail] = useState(props.location.state.contact.email);

    // setId(id);
    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        props.updateContactHandler({ id, name, email });
        setName("");
        setEmail("");
        props.history.push("/");

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
                <button >update</button>

            </form>

        </div>
    )
}

export default EditContact



// import React from "react";

// class EditContact extends React.Component {
//     constructor(props) {
//         super(props);
//         const { id, name, email } = props.location.state.contact;
//         this.state = {
//             id,
//             name,
//             email,
//         };
//     }

//     update = (e) => {
//         e.preventDefault();
//         if (this.state.name === "" || this.state.email === "") {
//             alert("ALl the fields are mandatory!");
//             return;
//         }
//         this.props.updateContactHandler(this.state);
//         this.setState({ name: "", email: "" });
//         this.props.history.push("/");
//     };
//     render() {
//         return (
//             <div className="ui main">
//                 <h2>Edit Contact</h2>
//                 <form className="ui form" onSubmit={this.update}>
//                     <div className="field">
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Name"
//                             value={this.state.name}
//                             onChange={(e) => this.setState({ name: e.target.value })}
//                         />
//                     </div>
//                     <div className="field">
//                         <label>Email</label>
//                         <input
//                             type="text"
//                             name="email"
//                             placeholder="Email"
//                             value={this.state.email}
//                             onChange={(e) => this.setState({ email: e.target.value })}
//                         />
//                     </div>
//                     <button className="ui button blue">Update</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default EditContact;

