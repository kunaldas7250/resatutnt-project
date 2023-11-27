import React from 'react'
import Layout from "./../component/layout/Second";
import {Link} from "react-router-dom"
import Banner from "../images/banner.jpeg"
import "../Style/Homestyle.css"
const Home = () => {
  return (
    <Layout>
     <div className='home' style={{backgroundImage:`url(${Banner})`}}>
  
        <div className='header-container'>
            <h1>Food website</h1>
            <p>Best Food In India </p>
          <Link to="/menu">  <button className='button'>oder Now</button></Link>
        </div>
     </div>
      </Layout>
    //    <h2>home pages</h2>
  )
}

export default Home
