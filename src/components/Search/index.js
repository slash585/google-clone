import React from "react"
import { useState } from "react"
import "./style.css"
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import { Button } from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { test } from "../../redux/slices/searchSlice"

export default function Search({ hideButtons = false }) {
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const search = (e) => {
    e.preventDefault()
    navigate("/search")
    dispatch(test(input))
  }

  return (
    <form className="search">
      <div className="searchInput">
        <SearchIcon className="inputIcon" />
        <input onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="searchButtons">
          <Button onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky!</Button>
        </div>
      ) : (
        <div className="searchButtons">
          <Button onClick={search} className="searchButtonsHiddes" type="submit" variant="outlined">
            Google Search
          </Button>
          <Button className="searchButtonsHiddes" variant="outlined">I'm Feeling Lucky!</Button>
        </div>
      )}
    </form>
  )
}
