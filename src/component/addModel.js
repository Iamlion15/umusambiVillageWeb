import { useState } from "react";

const AddModal = ({ showAdd, toggleAdd }) => {
    const [message, setMessage] = useState('');
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        nID: '',
        phone: ''
    });
    function submitHandler() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'x-auth-token':JSON.parse(localStorage.getItem("token"))
            },
            body: JSON.stringify(user)
        }
        fetch("http://localhost:7000/api/admin/addvisitor", requestOptions)
            .then((response) => {
                console.log(response);
                console.log(response.status);
                if (response.status===200) {
                    setMessage("User saved successfully")
                }
                else if(response.status===204)
                {
                    setMessage("User already exists")
                }
                else if(response.status===405)
                {
                    setMessage("email already used");
                }
                else {
                    setMessage("Not able to save");
                }
            })
            .catch(error => {
                console.log(error.message)
                setMessage("connect your server")
            })
    }

    return (
        <>
            <div className={`modal ${showAdd ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showAdd ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">ADD VISITOR</h5>
                            <button type="button" className="btn-close" onClick={toggleAdd}></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <span className="alert">{message}</span>
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text"  className="form-control"  onChange={(e) => setUser({ ...user, firstname: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text"  className="form-control" onChange={(e) => setUser({ ...user, lastname: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                    <label>Email</label>
                                    <input type="email"  className="form-control" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                    <label>National Identity</label>
                                    <input type="text"  className="form-control" onChange={(e) => setUser({ ...user, nID: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                    <label>phone</label>
                                    <input type="number"  className="form-control" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={toggleAdd}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={submitHandler}>
                                ADD USER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddModal;