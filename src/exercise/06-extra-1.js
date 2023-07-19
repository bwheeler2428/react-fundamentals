import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  let inputRef = useRef('')

  let handleSubmit = event => {
    event.preventDefault()
    let userNameInput = inputRef.current.value
    onSubmitUsername(userNameInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="#input">Username:</label>
        <input ref={inputRef} type="text" />
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
