import { useState } from "react";


const Book = ({ data, onPrevious }) => {
    const [message, setMessage] = useState('');
    const handlePrevious = () => {
        onPrevious();
    }
    function booknow() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'x-auth-token': JSON.parse(localStorage.getItem("token"))
            },
            body: JSON.stringify(data)
        }
        fetch("http://localhost:7000/api/admin/book", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    setMessage("unable to book please contact admin")
                }
                else {
                    setMessage("booked succesfully");
                }
            })
            .catch(error => {
                console.log(error.message)
                setMessage("connect your server")
            })
    }
    return (
        <>
            {message}
            <button  className="btn btn-sm btn-danger" onClick={handlePrevious}>GO BACK</button>
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td>FIRST NAME</td>
                        <td>{data.firstname}</td>
                    </tr>
                    <tr>
                        <td>LAST NAME</td>
                        <td>{data.lastname}</td>
                    </tr>
                    <tr>
                        <td>NATIONAL IDENTITY</td>
                        <td>{data.nID}</td>
                    </tr>
                    <tr>
                        <td>FEES</td>
                        <td>3000 RWF</td>
                    </tr>
                    <tr>
                        <td>ARRIVAL TIME</td>
                        <td>{Date.now()}</td>
                    </tr>
                </tbody>
            </table>
            
            <button  className="btn btn-success" style={{width:'200px',height:'40px'}}  onClick={booknow}>BOOK NOW</button>
        </>
    )
}


export default Book;