import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import laliga from "../../assets/laliga-2.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChartBar, faFlag, faHome, faPeopleGroup, faShirt } from '@fortawesome/free-solid-svg-icons'

const BottomBar = () => {

    return (
        <>
        <div className="nav-bar">
            <Link className="logo" to="/">
            <img className="logoimg" src={laliga} alt="Laliga"/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="team-link" to="/teams">
                    <FontAwesomeIcon icon={faPeopleGroup} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="country-link" to="/country">
                    <FontAwesomeIcon icon={faFlag} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="position-link" to="/position">
                    <FontAwesomeIcon icon={faShirt} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="search-link" to="/search">
                    <FontAwesomeIcon icon={faChartBar} />
                </NavLink>
            </nav>
        </div>
        </>
    )
}

export default BottomBar;