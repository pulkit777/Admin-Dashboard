import React , {useState} from "react";
import { Box , useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom"; // allow us to have template layouts
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";



// materialUi has a component called Box that allows you to pass in properties as if they are css properties
// cannot pass all properties directly so for that normal syntax used is sx={}
// this is the normal way - > sx={{display:"flex" }}
const Layout = () => {
   const isNonMobile = useMediaQuery("(min-width : 600px");
   const [isSidebarOpen , setIsSidebarOpen] = useState(true);


  return <Box display={isNonMobile ? "flex" : "block" }  width="100%" height="100%" >
  <Sidebar
    isNonMobile={isNonMobile}
    drawerWidth="250px"
    isSidebarOpen = {isSidebarOpen}
    setIsSidebarOpen={setIsSidebarOpen}
   />
     <Box>
      <Navbar 
         isSidebarOpen = {isSidebarOpen}
         setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet />
     </Box>
  </Box>
};
export default Layout;
