import React , {useState} from 'react'
// icons we using for Navbar
// eslint-disable-next-line
import { LightModeOutlined ,
         DarkModeOutlined , 
         Menu as MenuIcon , 
         Search, 
         SettingsOutlined, 
         ArrowDropDownOutlined 
       } from '@mui/icons-material'
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from "state";
import profileImage from "assets/profile.jpeg";
import { AppBar , IconButton, Toolbar, useTheme , InputBase } from "@mui/material";



const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
  return (
   <AppBar
   sx={{
    position: "static",
    background: "none",
    boxShadow: "none"
   }}
   >
   <Toolbar sx={{ justifyContent : "space-between"}}>
         {/* Left Side */}
      <FlexBetween >
        <IconButton onClick={() => console.log('open/close sidebar')} >
          <MenuIcon />
        </IconButton>
        <FlexBetween
         backgroundColor = {theme.palette.background.alt}
         borderRadius="9px"
         gap="3rem"
         p="0.1rem 1.5rem"
        >
          <InputBase placeholder = "search..."/>
          <IconButton>
            <Search  />
          </IconButton>
    
        </FlexBetween>
        </FlexBetween>

        {/* {RIGHT SIDE} */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {
              theme.palette.mode === 'dark' ? (
                <DarkModeOutlined sx={{fontsize : "25px"}}  />
              ) : (
                <LightModeOutlined sx={{ fontsize : "25px"}}  />
              )
            }
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{fontsize : "25px"}}  />
          </IconButton>
        </FlexBetween> 
   </Toolbar>
   </AppBar>
  )
}

export default Navbar