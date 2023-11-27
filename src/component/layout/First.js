import {useState,  React} from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from "react-router-dom"
import "../../Style/HeaderStyle.css"
import MenuIcon from '@mui/icons-material/Menu';
const First = () => {
  const [mobileopen,setmobileopen]=useState(false)


  const handletoggleclick=()=>{
setmobileopen(!mobileopen)
  }

  const drawer=(
   <Box onclick={handletoggleclick} style={{textAlign:"center"}}>
     <Typography color={"goldenrod"} variant="h6" component="div" style={{flexGrow:1,my:2}}><FastfoodIcon/>helo kunal</Typography>
     <Divider/>
      {/* <Box style={{display:{xs:"none" ,sm:"block"}}}> */}
        <ul className="mobile-navigation">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/Menu"}>Menu</Link>
          </li>

          <li>
            <Link to={"/About"}>About</Link>
          </li>

          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      {/* </Box> */}
   </Box> 

  )
  return (
    <>
      <Box>
    <AppBar component={"nav"} style={{backgroundColor:"black"}}>
      <Toolbar>
        <IconButton color={"inherit"} aria-label="open drawer" edge="start" style={{margin:2,display:{sm:"none"}}} onClick={handletoggleclick}>
          <MenuIcon/>
        </IconButton>
      <Typography color={"goldenrod"} variant="h6" component="div" style={{flexGrow:1}}><FastfoodIcon/>helo kunal</Typography>
      <Box style={{display:{xs:"none" ,sm:"block"}}}>
        <ul className='navigation-menu'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/Menu"}>Menu</Link>
          </li>

          <li>
            <Link to={"/About"}>About</Link>
          </li>

          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </Box>
      </Toolbar>
      
    </AppBar>
    <Box component="nav">
      <Drawer variant="Temporary" open={mobileopen} onClose={handletoggleclick} style={{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper": {boxsizing: "border-box",width:"280px"}}}>
{drawer}
      </Drawer>
    </Box>
    <Box >
    <Toolbar/>
    </Box>
    
      </Box>
    </>
  )
}

export default First
