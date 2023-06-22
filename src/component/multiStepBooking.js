import { useState } from "react";
import FindVisitor from "./findVisitorS";
import Visitordetails from "./visitorDetails";
import Book from "./book";

const MultiStep = () => {
    const [data, setData] = useState([])
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(2)
    }
    const reset = () => {
        setStep(1);
    }
    const gotobook = () => {
        setStep(3)
    }
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '150px'
                }}
            >
                <div>
                    {step === 1 && (<FindVisitor setVisitordata={setData} onNext={handleNext} setStep={setStep} />)}
                    {step === 2 && (<Visitordetails data={data} onPrevious={reset} proceed={gotobook} />)}
                    {step===3 && (<Book data={data} onPrevious={reset}/>)}
                </div>

            </div>
        </>
    )
}

export default MultiStep;