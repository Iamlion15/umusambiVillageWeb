import { useState, useEffect } from "react";


const VisityHistory = () => {
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'x-auth-token': JSON.parse(localStorage.getItem("token"))
            },
        }
        fetch("http://localhost:7000/api/admin/bookings", requestOptions)
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
    }, [])
    return (
        <>
            {message}
            <table>
                <thead>
                    <tr>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>NATIONAL IDENTITY</th>
                        <th>ARRIVAL TIME</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((person) => {
                        return (
                            <tr key={person._id}>
                                <td>{person.visitor.firstname}</td>
                                <td>{person.visitor.lastname}</td>
                                <td>{person.visitor.nID}</td>
                                <td>{person.arrivalTime}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}


export default VisityHistory;