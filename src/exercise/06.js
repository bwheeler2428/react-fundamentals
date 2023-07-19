// // // Basic Forms
// // // http://localhost:3000/isolated/exercise/06.js

// import * as React from 'react'

// function UsernameForm({onSubmitUsername}) {
//   let handleSubmit = event => {
//     event.preventDefault()
//     let userNameInput = event.target.elements[0].value
//     onSubmitUsername(userNameInput)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="#input">Username:</label>
//         <input type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App

// // Basic Forms
// // http://localhost:3000/isolated/exercise/06.js

// import * as React from 'react'

// function UsernameForm({onSubmitUsername}) {
//   let handleSubmit = event => {
//     event.preventDefault()
//     let userNameInput = event.target.elements[0].value
//     onSubmitUsername(userNameInput)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="#input">Username:</label>
//         <input type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App

import * as React from 'react'
import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  let inputRef = useRef('')
  const [error, setError] = useState(false)

  let handleSubmit = event => {
    event.preventDefault()
    let userNameInput = inputRef.current.value
    onSubmitUsername(userNameInput)
  }

  let handleChange = event => {
    const {value} = event.target
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Error: User name must be all lowercase')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="#input">Username:</label>
        <input ref={inputRef} type="text" onChange={handleChange} />
      </div>
      <button type="submit" disabled={error ? true : false}>
        Submit
      </button>
      <div style={{color: 'red'}}>{error}</div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
