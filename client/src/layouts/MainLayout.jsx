import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='px-4 mf:px8 lg:px-16 xl:px-32 2xl:px-64'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout