import React from 'react'
import { useHistory } from 'react-router-dom'


const EventList = ({ element }) => {

    const history = useHistory()

    const goToDetail = (id) => {
        history.push(`/event/${id}`)
    }
    return <>
        <tr className="back-list">
            <th scope="row">{element.id}</th>
            <td>{element.title}</td>
            <td>{element.lokasi}</td>
            <td>{element.now_date}</td>
            <td>{element.participant}</td>
            <a href=""><i onClick={() => goToDetail(element.id)} className='fas fa-exclamation-circle' style={{fontSize: "24px", marginTop:"10px", marginLeft:"20px"}}></i></a>
        </tr>
    </>
}

export default EventList