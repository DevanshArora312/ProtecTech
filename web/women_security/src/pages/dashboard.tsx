import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideDrawer from '../components/SideDrawer'
export const Dashboard = () => {
    return (
      <div className='min-h-full'>
          <div>
              <Navbar/>
          </div>
          <div className='flex flex-row items-center min-h-[90vh]'>
              <div>
                  <SideDrawer/>
              </div>
              <div>
                  <Outlet/>
              </div>
          </div>
      </div>
    )
}
