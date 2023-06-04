import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    function loginHandler(e) {
        e.preventDefault();
        const methodOptions = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/JSON",
            },
        };
        fetch("http://localhost:7000/api/admin/login", methodOptions)
            .then((response) => {
                if (!response.ok) {
                    console.log("INVALID EMAIL OR PASSWORD");
                    setMsg("INVALID EMAIL OR PASSWORD")
                }
                return response.json();
            })
            .then((data) => {
                    localStorage.setItem("token", JSON.stringify(data.token))
                    console.log(localStorage.getItem("token"))
                    if (data.hasOwnProperty("token")) {
                        navigate("admindashboard")
                    }
                    else {
                        setMsg("incorrect password or email")
                    }
                
            })
            .catch((error) => {
                setMsg("unexpected error occured");
                console.log(error);
            });
    }
    return (
        <>
            <form onSubmit={loginHandler}>
                <div>{msg}</div>
                <label>EMAIL</label>
                <input
                    type="text"
                    onChange={(e) => setData({ ...data, username: e.target.value })}
                />
                <label>PASSWORD</label>
                <input
                    type="password"
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                <input type="submit" value="login" />
            </form>
        </>
    )
}

export default Login;