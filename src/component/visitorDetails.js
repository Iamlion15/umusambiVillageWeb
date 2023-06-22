

const Visitordetails=({data,onPrevious,proceed})=>{
    return(
        <>
        <form>
            <div className="form-input">
                <label>First Name</label>
                <input type="text" className="form-control" value={data.firstname} disabled/>
                </div>
                <div className="form-input">
                <label>Last Name</label>
                <input type="text" className="form-control" value={data.lastname} disabled/>
                </div>
                <div className="form-input">
                <label>Email</label>
                <input type="email" className="form-control" value={data.email} disabled/>
                </div>
                <div className="form-input">
                <label>National Identity</label>
                <input type="text" className="form-control" value={data.nID} disabled/>
                </div>
                <div className="form-input">
                <label>phone</label>
                <input type="number" className="form-control" value={data.phone} disabled/>
                </div>
                <div style={{
                    display:'flex',
                    gap:'20px',
                    marginTop:'15px'
                }}>
                <button style={{alignContent:'end'}} className="btn btn-primary" onClick={()=>proceed()}>PROCEED</button>
                <button className="btn btn-info" onClick={()=>onPrevious()}>GO BACK</button>
                </div>
            </form>
        </>
    )
}

export default Visitordetails;