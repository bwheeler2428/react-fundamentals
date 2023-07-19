import * as React from 'react'
import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  let inputRef = useRef('')
  const [userName, setUserName] = useState('')

  let handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(userName)
  }

  let handleChange = event => {
    let userName = event.target.value
    setUserName(userName.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="#input">Username:</label>
        <input
          ref={inputRef}
          type="text"
          onChange={handleChange}
          value={userName}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
