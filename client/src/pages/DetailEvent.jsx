import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchEventDetail } from '../store/actions'

function DetailEvent () {
    const dispatch = useDispatch()
    const detail = useSelector(state => state.detail)
    const params = useParams()

    useEffect(() => {
        dispatch(fetchEventDetail(params.id))
    }, [])

    return (
        <div className="detail-form">
            <div className="addlogo">
                <img src={detail.image_url} style={{width: "600px"}}/>
            </div>
            <div className="border-detail">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <div className="detail-set">
                        <p>Title:</p>
                        <p>{detail.title}</p>
                    </div>
                    <hr/>
                    <div className="detail-set">
                        <p>Location:</p>
                        <p>{detail.lokasi}</p>
                    </div>
                    <hr/>
                    <div className="detail-set">
                        <p>Date:</p>
                        <p>{detail.now_date}</p>
                    </div>
                    <hr/>
                    <div className="detail-set">
                        <p>Participant:</p>
                        <p>{detail.participant}</p>
                    </div>
                    <hr/>
                    <div className="detail-note">
                        <p>Notes:</p>
                        <p>{detail.notes}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DetailEvent