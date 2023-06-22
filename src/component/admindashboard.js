import { useState } from "react";
import Findvisitor from "./findVisitor"
import Book from "./book";
import { Link } from "react-router-dom";

const Admindashboard=()=>{
    const [step,setStep]=useState(1);
    const [data,setData]=useState({});
    const handleNext=()=>{
        setStep(2)
    }
    const handlePrevious=()=>{
        setStep(1);
    }
    return(
        <>
        <Link to="/history">
            <button>VIEW HISTORY</button>
        </Link>
        <Link to="/operations">
            <button>VISITOR OPERATIONS</button>
        </Link>

        {step===1 &&(<Findvisitor  onNext={handleNext} setVisitordata={setData}/>)}
        {step===2 && (<Book  onPrevious={handlePrevious} data={data}/>)}
        </>
    )
}

export default Admindashboard;