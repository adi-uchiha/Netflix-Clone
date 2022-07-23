import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'
import "./featured.scss"
export default function Featured({type}) {
  return (
    <div className='featured' >
        {type && 
        <div className="category">
            <span>{type==="movie"? "movies" : "series"}</span>
            <select name="genre" id="genre">
                <option value="genre">Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="si-fi">Si-Fi</option>
                <option value="wester">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drame</option>
                <option value="documentary">Documentary</option>
                
            </select>

        </div> 
        }
        <img width="100%" src="https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="" />

    <div className="info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/The-matrix-logo.svg/1024px-The-matrix-logo.svg.png" alt="" />
        <span className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus explicabo, libero veniam molestias, et architecto adipisci quasi laboriosam hic maiores eveniet repellendus deserunt! Atque amet quam consectetur nesciunt fugiat quod?
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>More</span>
            </button>
        </div>
    </div>

    </div>
  )
}
