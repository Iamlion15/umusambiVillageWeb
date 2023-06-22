import { useState, useEffect } from "react";
import UpdateModal from "./updateModal";
import DeleteModal from "./deleteModal";
import AddModal from "./addModel";
const VisitorOperations = () => {
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        nID: '',
        phone: ''
    });
    const toggleModal = (person) => {
        setShowModal(!showModal);
        setUser(person);
    };

    const toggleDelete = (person) => {
        setShowDelete(!showDelete);
        setUser(person);
    };
    const toggleAdd = (person) => {
        setShowAdd(!showAdd);
    };

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'x-auth-token': JSON.parse(localStorage.getItem("token"))
            },
        }
        fetch("http://localhost:7000/api/admin/getvisitors", requestOptions)
            .then((response) => {
                if (!response.ok) {

                    setMessage("PLEASE RETRY")
                }
                return response.json();
            })
            .then(visitor => {
                console.log(visitor)
                setData(visitor);
            })
            .catch(error => {
                console.log(error.message)
                setMessage("connect your server")
            })
    }, []);

    function search()
    {
        
    }
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent:'end',
                paddingRight:'50px' 
            }}>
                <div className="form-input" style={{alignItems:'center'}}>
                    <input type="text" className="form-control" placeholder="search for a visitor" onChange={search}/>
                </div>
                <button className="btn btn-primary" onClick={toggleAdd} style={{ width: '120px'}}>add visitor</button>
            </div>
            {message}
            <div id="visitorTable">
                <table className="table table-striped table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>NATIONAL IDENTITY</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>OPERATIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((person) => {
                            return (
                                <tr key={person._id}>
                                    <td>{person.firstname}</td>
                                    <td>{person.lastname}</td>
                                    <td>{person.nID}</td>
                                    <td>{person.email}</td>
                                    <td>{person.phone}</td>
                                    <td><button className="btn btn-danger" onClick={() => toggleDelete(person)}>DELETE</button></td>
                                    <td><button className="btn btn-secondary" onClick={() => toggleModal(person)}>UPDATE</button></td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>

            {/* modal */}

            <div>
                {showModal && (<div className="modal-backdrop show" onClick={toggleModal}></div>)}
                <UpdateModal showModal={showModal} toggleModal={toggleModal} user={user} setUser={setUser} />
                {/* deleteee */}
                {showDelete && (<div className="modal-backdrop show" onClick={toggleDelete}></div>)}
                <DeleteModal showDelete={showDelete} toggleDelete={toggleDelete} user={user} />

                {/* add */}
                {showAdd && (<div className="modal-backdrop show" onClick={toggleAdd}></div>)}
                <AddModal showAdd={showAdd} toggleAdd={toggleAdd} />
            </div>

        </>
    )
}

export default VisitorOperations;