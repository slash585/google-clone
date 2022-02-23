import React, { useEffect, useState } from "react"
import { selectTerm } from "../../redux/slices/searchSlice"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./style.css"
import Search from "../../components/Search"
import SearchIcon from "@material-ui/icons/Search"
import DescriptionIcon from "@material-ui/icons/Description"
import ImageIcon from "@material-ui/icons/Image"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import MoreVertIcon from "@material-ui/icons/MoreVert"

function SearchPage() {
  const term = useSelector(selectTerm)
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyDf644ht8AfUa9mQ92G_L7fUMLBOsbATxE&cx=b45df59aabf4a84a8&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => setData(result))
    }
    fetchData()
  }, [term])
  console.log(data)
  return (
    <div className="searchPage">
      <div className="searchPageHeader">
        <Link to="/">
          <img
            className="searchPageLogo"
            alt="logo"
            src="https://www.google.com.tr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          />
        </Link>

        <div className="searchPageHeaderBody">
          <Search hideButtons />
          <div className="searchOptions">
            <div className="searchOptionsLeft">
              <div className="searchOption">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchOption">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchOption">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchOption">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchOption">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchOption">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchOptionsRight">
              <div className="searchOption">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchOption">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data && (
        <div className="searchPageResults">
          <p className="searchPageResultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data.items.map((item) => (
            <div className="searchPageResult">
              <a href={item.formattedUrl}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPageResultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                    />
                  )}
                  {item.displayLink}
              </a>
              <a className="searchPageResultTitle" href={item.formattedUrl}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPageResultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
