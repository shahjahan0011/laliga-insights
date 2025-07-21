import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import laliga2 from "../../assets/laliga-2.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFlag, faHome, faPeopleGroup, faSearch, faShirt } from '@fortawesome/free-solid-svg-icons'

const BottomBar = () => {

    return (
        <>
        <div className="nav-bar">
            <Link className="logo" to="/">
            <img className="logoimg" src={laliga2} alt="Laliga"/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="team-link" to="/team">
                    <FontAwesomeIcon icon={faPeopleGroup} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="country-link" to="/country">
                    <FontAwesomeIcon icon={faFlag} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="position-link" to="/position">
                    <FontAwesomeIcon icon={faShirt} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="search-link" to="/search">
                    <FontAwesomeIcon icon={faSearch} />
                </NavLink>
            </nav>
        </div>
        </>
    )
}

export default BottomBar;