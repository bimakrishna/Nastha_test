import addLogo from '../assets/addlogo.png'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createEvent } from '../store/actions'
import swal from 'sweetalert'

function Addevent () {
    const dispatch = useDispatch()
    const history = useHistory()
    const [ errorMessage, setErrorMessage ] = useState('')
    const [ inputPayload, setInputPayload ] = useState({
        title: '',
        lokasi: '',
        participant: '',
        now_date: '',
        image_url: '',
        notes: ''
    })

    const handleCreateEvent = (e) => {
        e.preventDefault()
        if(inputPayload.title && inputPayload.lokasi && inputPayload.participant && inputPayload.now_date && inputPayload.image_url && inputPayload.notes) {
            dispatch(createEvent(inputPayload))
            swal("Event baru sudah ditambahkan")
            history.push('/')
        }
        else {
            swal('Semua nya harus terisi')
        }
    }

    const handleInputChange = (e) => {
        const input = e.target
        setInputPayload({ ...inputPayload, [input.name]: input.value})
    }
    return (
        <>
        <div className="add-form">
            <div className="border-input">
                {errorMessage ?
                    <div class="alert alert-danger" role="alert">
                        <p>{errorMessage}</p>
                    </div> : ''
                }
                <form onSubmit={handleCreateEvent}>
                    <p style={{fontSize: "20px", fontWeight: "bold"}}>ADD EVENT</p>
                    <div className="form-group">
                        <div className="first-input">
                            <input name="title" value={inputPayload.title} onChange={handleInputChange} type="text" className="form-control" aria-describedby="Title" placeholder="Title" />
                            <input name="lokasi" value={inputPayload.lokasi} onChange={handleInputChange} type="text" className="form-control" aria-describedby="Location" placeholder="Location" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="first-input">
                            <input name="participant" value={inputPayload.participant} onChange={handleInputChange} type="text" className="form-control" placeholder="Participant" />
                            <input name="now_date" value={inputPayload.now_date} onChange={handleInputChange} type="date" className="form-control"  />
                        </div>
                    </div>
                    <div className="form-group">
                        <input name="image_url" value={inputPayload.image_url} onChange={handleInputChange} type="text" className="form-control" placeholder="image url"/>
                    </div>
                    <div className="form-group">
                        <textarea name="notes" value={inputPayload.notes} onChange={handleInputChange} type="password" className="form-control" placeholder="Note" rows="3" />
                    </div>
                    <button type="submit" className="btn btn-primary col-8 button">Submit</button>
                </form>
            </div>
            <div className="addlogo">
                <img src={addLogo} style={{width: "400px"}}/>
            </div>
        </div>
        </>
    )
}

export default Addevent