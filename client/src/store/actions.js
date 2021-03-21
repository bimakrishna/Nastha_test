const baseUrl = 'http://localhost:3005'

export const fetchEvents = () => {
    return async(dispatch, getState) => {
        try {
            const response = await fetch(`${baseUrl}/event`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(response.ok) {
                const data = await response.json()
                dispatch({
                    type: 'SET_EVENTS',
                    payload: data
                })
            }
            else {
                throw new Error({
                    status: response.status,
                    statusText: response.statusText
                })
            }
        }
        catch(err) {
            console.log(err);
        }
    }
}

export const createEvent = (payload) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${baseUrl}/event`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            if(response.ok) {
                const event = await Response.json()
                const events = getState().events
                const newEvent = events.concat(event)
                dispatch({
                    type: 'SET_EVENTS',
                    payload: newEvent
                })
            }
            else {
                throw new Error({
                    status: response.status,
                    statusText: response.statusText
                })
            }
        }
        catch(err){
            console.log(err);
        }
    }
}

export const fetchEventDetail = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${baseUrl}/event/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(response.ok) {
                const data = await response.json()
                dispatch({
                    type: 'SET_DETAIL',
                    payload: data
                })
            }
            else {
                throw new Error({
                    status: response.status,
                    statusText: response.statusText
                })
            }
        }
        catch(err) {
            console.log(err);
        }
    }
}