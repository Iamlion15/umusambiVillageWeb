import { useState } from "react";

const FindVisitor = ({onNext,setVisitordata}) => {
    const [message, setMessage] = useState('');
    
    const [data,setData]=useState({
        nID: '',
    });
    const[visitor,setVisitor]=useState({});
    const[show,setShow]=useState(false);
    function submitHandler(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'x-auth-token': JSON.parse(localStorage.getItem("token"))
            },
            body: JSON.stringify(data)
        }
        console.log(requestOptions);
        fetch("http://localhost:7000/api/admin/findvisitor", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    setMessage("an error occured")
                }
                return response.json();
            })
            .then((data) => {
                if (data.code === "no") {
                    setShow(false);
                }
                else {
                    if (data.code === "yes") {
                        setVisitor(data.message)
                        setVisitordata(data.message)
                        setShow(true);
                        onNext();
                    }
                }
            })
            .catch(error => {
                console.log(error.message)
                setMessage("connect your server")
            })
    }
    return (
        <>
            <div className="container">
                <div style={{
                    position:'relative',
                    paddingTop:'20px',
                    width: '300px',
                    height: '150px',
                    borderRadius: '5px',
                    backgroundColor: 'blue'
                }}>
                    <form onSubmit={submitHandler}>
                        <div className="form-input">
                            <label>Enter National Identification card Number</label>
                            <input type="text" className="form-control" placeholder="Enter national id" onChange={(e) => setData({ nID: e.target.value })} />
                            <input type="submit" className="btn btn-success" value="Find visitor"/>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default FindVisitor;