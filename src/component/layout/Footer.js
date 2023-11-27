import React from 'react'
import { Box, Typography } from "@mui/material"
import "../../Style/HeaderStyle.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <Box style={{textAlign:"center",color:"white",padding:10,backgroundColor:"black" }}>
    <Box  style={{margin:"10"}}>
    
            <InstagramIcon className="hover"  style={{fontSize: "50px",cursor:"pointer",marginRight:"2"}}/>
            <TwitterIcon className="hover" style={{fontSize: "50px",cursor:"pointer",marginRight:"2"}}/>
            <GitHubIcon  className="hover"style={{fontSize: "50px",cursor:"pointer",marginRight:"2"}}/>
            <YouTubeIcon  className="hover" style={{fontSize: "50px",cursor:"pointer",marginRight:"2"}}/>
        </Box>
        <Typography variant='h4' style={{"@media (max-width:600px)":{fontSize:"1rem"}}}>
            All Right Reseerve &copy; made by It's Kunal_Riku
        </Typography>
    </Box>
      {/* <h1>footer pages</h1> */}
    </>
  )
}

export default Footer
