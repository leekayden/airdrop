import React, { useState, useEffect } from 'react'
import history from '../history'

import socket from '../Functions/Users'
import './List.css'

//variable for redirection
let click = false

export default function List() {
  const { location } = history
  let er = location.search
  let name_of_users = er.split('?name=')

  const [user, setUser] = useState({
    online: 1,
  })
  const [room, setRoom] = useState()
  const [feedback, setfeedback] = useState(false)

  //feedback
  if (room || feedback) {
    window.navigator.vibrate(200)
  }

  //effect
  useEffect(() => {
    const set = (data) => {
      setRoom(data)
    }
    socket.on('join_room', set)
    return () => socket.off('join_room', set)
  }, [room])

  socket.on('users', (user) => {
    setUser({
      online: user.online_users,
      name: user.users,
    })
  })

  //listen to events

  const { name } = user

  //handle click
  const handleClick = (e) => {
    if (name_of_users[1] === e.target.dataset['name']) return

    setfeedback(true)
    click = !click
    socket.emit('room_name', {
      room: e.target.dataset['name'],
      id: e.target.dataset['id'],
      name: name_of_users[1],
    })
  }

  socket.on('Joined', (data) => {
    if (click) {
      history.push(`/chat/${data.room}#init`)
    } else {
      history.push(`/chat/${data.room}`)
    }
  })

  const handleAccept = () => {
    socket.emit('Join_by_ME', room)
  }

  return (
    <div className='list_style'>
      <p>
        There are {user.online} users active now. And Your name is{' '}
        <b>{name_of_users[1]}</b>
      </p>
      <br />
      <ul style={{ listStyle: 'decimal-leading-zero' }}>
        {name &&
          name.map((data) => (
            <li
              key={data.id}
              data-id={data.id}
              data-name={data.name}
              onClick={handleClick}
            >
              {data.name}
            </li>
          ))}
      </ul>
      {!name ? (
        <q>
          Please wait untill your friend joins the connection or you will
          recieve a notification to join
        </q>
      ) : (
        ''
      )}
      {feedback ? (
        <q>
          Request send to the room successfully. Wait untill the request is
          accepted!
        </q>
      ) : (
        ''
      )}
      {room ? (
        <div>
          <div>
            {room.name} wants to connect with you id:({room.room})
          </div>
          <button onClick={handleAccept}>Accept</button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
