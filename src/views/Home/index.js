import React from "react"
import { Link } from "react-router-dom"
import { Avatar } from "@material-ui/core"
import AppsIcon from "@material-ui/icons/Apps"
import Search from "../../components/Search"
import "./style.css"

export default function Home() {
  return (
    <div className="home">
      <div className="homeHeader">
        <div className="homeHeaderLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="homeHeaderRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="homeBody">
          <img alt="google-logo" src="https://www.google.com.tr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
          <div className="homeInputContainer">
            <Search hideButtons />
          </div>
      </div>
    </div>
  )
}
