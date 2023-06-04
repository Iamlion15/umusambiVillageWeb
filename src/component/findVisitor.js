import { useState } from "react";
import { Link } from "react-router-dom";
import Visitordetails from "./visitorDetails";

const Findvisitor=()=>{
    const [data,setData]=useState({
        nID: '',
    });
    const[show,setShow]=useState(false);
    const [message, setMessage] = useState('');
    function submitHandler(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'x-auth-token':JSON.parse(localStorage.getItem("token"))
            },
            body: JSON.stringify(data)
        }
        console.log(requestOptions);
        fetch("http://localhost:7000/api/admin/findvisitor", requestOptions)
            .then((response) => {
                if (!response.OK) {
                    console.log(response);
                    setMessage("an error occured")
                }
                return response.json();
            })
            .then((data)=>{
                if(data.code==="no")
                {
                    setShow(false);
                }
                else{
                    if(data.code==="yes")
                    {
                        setData(data.message)
                        setShow(true);
                    }
                }
            })
            .catch(error => {
                console.log(error.message)
                setMessage("connect your server")
            })
    }

    return(
        <>
            {message}
            <form onSubmit={submitHandler}>
                <label>First Name</label>
                <input type="text" onChange={(e) => setData({nID: e.target.value })} />
                <input type="submit" value="FIND VISITOR" />
            </form>
        <div>
            {show ? <Visitordetails data={data}/>:null}
            
            {show? <div>
                <Link to="">
                <button>PROCEED WITH THE BOOKING</button>
                </Link>
                </div>
                :null}
        </div>
        </>
    )
}
export default Findvisitor;