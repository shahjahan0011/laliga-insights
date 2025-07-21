import './index.scss';
import laliga from '../../../assets/laliga.png';

const Logo = () => {

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={laliga}
        alt="Logo J"
      />
    </div>
  )
}

export default Logo;