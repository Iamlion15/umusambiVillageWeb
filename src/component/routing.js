import { Routes,Route } from "react-router-dom"
import Login from "./login"
import Admindashboard from "./admindashboard"
import VisityHistory from "./history"
import VisitorOperations from "./visitorOperations"
import AdminTest from "./admintest"
// import Test from "./test"

const RoutingUtils=()=>{
    return (
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/admindashboard" element={<Admindashboard/>}/>
            <Route path="/history" element={<VisityHistory/>}/>
            <Route path='/operations' element={<VisitorOperations/>}/>
            <Route path="/admin" element={<AdminTest/>}/>
        </Routes>
    )
}

export default RoutingUtils;