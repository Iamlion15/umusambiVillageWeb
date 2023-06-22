import { useState } from "react";

const UpdateModal = ({ showModal, toggleModal,user,setUser }) => {
    const [message, setMessage] = useState('');
    function submitHandler() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'x-auth-token':JSON.parse(localStorage.getItem("token"))
            },
            body: JSON.stringify(user)
        }
        fetch("http://localhost:7000/api/admin/modifyvisitor", requestOptions)
            .then((response) => {
                if (response.ok) {
                    setMessage("User updated successfully")
                }
                else {
                    setMessage("Not able to update");
                }
            })
            .catch(error => {
                console.log(error.message)
                setMessage("connect your server")
            })
    }

    return (
        <>
            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">UPDATE USER</h5>
                            <br></br>
                            <h3>{message}</h3>
                            <button type="button" className="btn-close" onClick={toggleModal}></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={user.firstname || ''} className="form-control"  onChange={(e) => setUser({ ...user, firstname: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={user.lastname || ''} className="form-control" onChange={(e) => setUser({ ...user, lastname: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={user.email || ''} className="form-control" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                    <label>National Identity</label>
                                    <input type="text" value={user.nID || ''} className="form-control" onChange={(e) => setUser({ ...user, nID: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                    <label>phone</label>
                                    <input type="number" value={user.phone || ''} className="form-control" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={submitHandler}>
                                UPDATE USER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpdateModal;