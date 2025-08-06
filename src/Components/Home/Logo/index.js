import './index.scss';
import { useEffect, useState } from 'react';
import laliga from '../../../assets/laliga.png';

const Logo = () => {
  const [showMobileWarning, setShowMobileWarning] = useState(false)

  useEffect(() => {
    // Check if the screen width is less than 768px (typical mobile width)
    if (window.innerWidth <= 768) {
      setShowMobileWarning(true)
    }
  }, [])

  const handleClosePopup = () => {
    setShowMobileWarning(false)
  }

  return (
    <>
    {showMobileWarning && (
        <div className="mobile-warning-overlay">
          <div className="mobile-warning-popup">
            <p>The website is not optimized for mobile devices. </p> 
            <p>Please view it on a larger screen.</p>
            <button onClick={handleClosePopup}>OK</button>
          </div>
        </div>
      )}

    <div className="logo-container">
      <img
        className="solid-logo"
        src={laliga}
        alt="Logo J"
      />
    </div>
    </>
  )
}

export default Logo;