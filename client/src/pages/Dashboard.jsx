import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvents } from '../store/actions'
import EventList from '../components/EventList'
import Pagination from '../components/Pagination'

function Dashboard () {
    const events = useSelector(state => state.events)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerEvent] = useState(5)
    const indexOfLastEvent = currentPage * postsPerEvent
    const indexOfFirstEvent = indexOfLastEvent - postsPerEvent
    const currentPosts = events.slice(indexOfFirstEvent, indexOfLastEvent)
    const [ searchEvent, setSearchEvent ] = useState('')

    const filteredEvents = currentPosts.filter( event => {
        return event.title.toLowerCase().includes( searchEvent.toLowerCase() )
    })

    useEffect(() => {
        dispatch(fetchEvents()) 
    }, [])

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <>
        <div className="list-event" >
            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input 
                        className="form-control mr-sm-2" 
                        type="text" 
                        placeholder="Search" 
                        onChange={(event) => {
                            setSearchEvent(event.target.value)
                            }} 
                        />
                </form>
            </div>
            <div>
            <table className="table" style={{marginTop:"10px"}}>
                <thead className="tabel-head">
                    <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                    <th scope="col">Participant</th>
                    <th scope="col">Detail</th>
                    </tr>
                </thead>
                {
                    filteredEvents.map(el => (
                        <EventList 
                            key={el.id}
                            element={el} />
                    ))  
                }
            </table>
                <div className="pagination-segment">
                    <Pagination postsPerEvent={postsPerEvent} totalPosts={events.length} paginate={paginate}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard