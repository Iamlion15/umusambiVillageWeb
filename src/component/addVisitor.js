import { useState } from "react";
import checkAuthentication from "../Helper/AuthenticationHelper";

const AddVisitor = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        nID: '',
        phone: ''
    });
    const [message, setMessage] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'x-auth-token':checkAuthentication()["x-auth-token"]
            },
            body: JSON.stringify(data)
        }
        fetch("http://localhost:7000/api/admin/addvisitor", requestOptions)
            .then((response) => {
                if (!response.OK) {
                    setMessage("You have been registered successfully")
                }
                else {
                    setMessage("Not able to register");
                }
            })
            .catch(error => {
                console.log(error.message)
                setMessage("connect your server")
            })
    }

    return (
        <div>
            {message}
            <form onSubmit={submitHandler}>
                <label>First Name</label>
                <input type="text" onChange={(e) => setData({ ...data, firstname: e.target.value })} />
                <label>Last Name</label>
                <input type="text" onChange={(e) => setData({ ...data, lastname: e.target.value })} />
                <label>Email</label>
                <input type="email" onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label>National Identity</label>
                <input type="text" onChange={(e) => setData({ ...data, nID: e.target.value })} />
                <label>phone</label>
                <input type="number" onChange={(e) => setData({ ...data, phone: e.target.value })} />
                <input type="submit" value="ADD VISITOR" />
            </form>
        </div>
    )
}


export default AddVisitor;