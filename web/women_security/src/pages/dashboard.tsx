import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideDrawer from '../components/SideDrawer'
export const Dashboard = () => {
    return (
      <div className='min-h-full'>
          <div>
              <Navbar/>
          </div>
          <div className='flex flex-row items-center min-h-[90vh] w-full'>
              <div>
                  <SideDrawer/>
              </div>
              <div className='w-full mt-4 mr-4'>
                  <Outlet/>
              </div>
          </div>
      </div>
    )
}
