import NavStyles from "../styles/SideNavStyles";
import personIcon from '../../icons/person-square.svg'
import clockHistory from '../../icons/clock-history.svg'
import journal from '../../icons/journal-check.svg'

const SideNav = () => {
    return (
        <>
            <div style={NavStyles.generalLayout} >
            <div style={NavStyles.adminProfile}>
                <img src="/" height='60px' width='60px' alt="admin"/>
                <p>Administrator</p>
            </div>
            <div style={NavStyles.wrapper}>
                <div style={NavStyles.items}>
                <img src="/" height='60px' width='60px' alt="admin"/>
                <p>Dashboard</p>
                </div>
                <div style={NavStyles.items}>
                <img src={personIcon} height='20px' width='20px' alt="person"/>
                <p>Visitors</p>
                </div>
                <div style={NavStyles.items}>
                <img src={clockHistory} height='20px' width='20px' alt="history"/>
                <p>Visitation history</p>
                </div>
                <div style={NavStyles.items}>
                <img src={journal} height='20px' width='20px' alt="booking"/>
                <p>Book</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default SideNav;