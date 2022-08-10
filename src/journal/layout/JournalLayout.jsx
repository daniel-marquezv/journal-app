import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animete__faster">

      {/* Navbar */}
      <NavBar drawerwith={drawerWidth} />

      {/* Sidebar */}
      <SideBar drawerWidth={drawerWidth} />

      <Box component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />

        {children}
      </Box>


    </Box>
  )
}
