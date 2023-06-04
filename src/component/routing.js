import { Routes,Route } from "react-router-dom"
import Login from "./login"
import Admindashboard from "./admindashboard"

const RoutingUtils=()=>{
    return (
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/admindashboard" element={<Admindashboard/>}/>
        </Routes>
    )
}

export default RoutingUtils;