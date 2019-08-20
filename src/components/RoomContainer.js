import React from 'react'
import Loading from './Loading'
import {Link} from 'react-router-dom'
import {RoomConsumer} from '../context'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {value =>{
                const {loading, Rooms, SortedRooms}= value
                if(loading){
                    return (<Loading/>)
                }
                return(
                    <div>
                        <RoomsFilter rooms={Rooms}></RoomsFilter>
                        <RoomList rooms={SortedRooms}/>
                    </div>
                )
            }}
        
        </RoomConsumer>
    )
}
