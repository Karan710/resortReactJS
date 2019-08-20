import React, { Component } from 'react'
import {RoomContext} from '../context';
import Loading from './Loading'
import Title from './Title' 
import Room from './Room'

export default class extends Component {
    static contextType= RoomContext
    render() {
        let {loading, FeaturedRooms: rooms}= this.context
        rooms = rooms.map(room=>{
            return <Room key={room.id} room={room}/>
        }
        )
        console.log(rooms)
        return (
            
            <section className="featured-rooms">
                <Title title="Featured Rooms"></Title>
                <div className="featured-rooms-center">{loading?<Loading/>: rooms}</div>
            </section>
        )
    }
}