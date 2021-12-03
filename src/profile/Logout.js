import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const history = useHistory()

    useEffect(() => {
        localStorage.clear()

       history.push('/')
    }, [])

    return (
        <div>
            <h3>Logout</h3>
        </div>

    )
}

export default Logout