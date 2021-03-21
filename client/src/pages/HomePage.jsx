import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvents } from '../store/actions'
import EventCard from '../components/EventCard'

function HomePage () {
    const events = useSelector(state => state.events)
    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(fetchEvents())
    }, [events])
    
    return (
        <>
        <div className="card-box">
            {
                events.map(el => (
                    <EventCard
                        key={el.id}
                        element={el}
                    />
                ))
            }
        </div>
        </>
    )
}

export default HomePage