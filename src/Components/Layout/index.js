import './index.scss';
import TopBar from '../TopBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return(
        <>
        <div className='App'>
        <TopBar/>
        <Outlet/>
        </div>
        </>
    )
}

export default Layout;