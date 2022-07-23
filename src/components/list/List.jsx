import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import "./list.scss"
function List() {
    const listRef = useRef()
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)
    const handleClick =(direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x -50
        if (direction ==="left" && slideNumber>0) {
            listRef.current.style.transform = `translateX(${230+distance}px)`
            setSlideNumber(slideNumber-1)
        }
        if (direction ==="right" && slideNumber<5) {
            listRef.current.style.transform = `translateX(${-230+distance}px)`
            setSlideNumber(slideNumber+1)
        }

    }
    return (
        <div className='list'>

            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined className='sliderArrow left'onClick={()=>handleClick("left")} 
                style = {{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")} />
            </div>


        </div>
    )
}

export default List