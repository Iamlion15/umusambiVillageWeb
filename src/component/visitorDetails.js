

const Visitordetails=({data})=>{
    return(
        <>
        <form>
                <label>First Name</label>
                <input type="text" value={data.firstname} disabled/>
                <label>Last Name</label>
                <input type="text" value={data.lastname} disabled/>
                <label>Email</label>
                <input type="email" value={data.email} disabled/>
                <label>National Identity</label>
                <input type="text" value={data.nID} disabled/>
                <label>phone</label>
                <input type="number" value={data.phone} disabled/>
            </form>
        </>
    )
}

export default Visitordetails;