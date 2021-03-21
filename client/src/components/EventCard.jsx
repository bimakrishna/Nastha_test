import React from 'react'

function EventCard (props) {
    const { element } = props

    return (
        <>
        <div className="card" style={{width:"18em"}}>
            <img className="card-img-top" src={element.image_url} alt="Card image cap" />
            <div className="card-body">
            <small className="card-text"><i class='fas fa-map-marker-alt'></i> {element.lokasi}</small>
                <h5 className="card-title">{element.title}</h5>
                <small className="card-text">{element.now_date}</small>
                <hr/>
                <p>{element.participant}</p>
                <hr/>
                <p className="note">Note:</p>
                <p className="card-text">{element.notes}</p>
            </div>
        </div>
        </>
    )
}

export default EventCard 