// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const smallBox = (
  <div
    className={'box box--small'}
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className={'box box--medium'}
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className={'box box--large'}
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

// Extra Credit 1 Solution:

// function Box({classNameContent = '', styleContent = '', ...otherProps}) {
//   return (
//     <div
//       className={`box ${classNameContent}`}
//       style={{fontStyle: 'italic', ...styleContent}}
//       {...otherProps}
//     />
//   )
// }

// function App() {
//   return (
//     <>
//       <div>
//         {smallBox}
//         {mediumBox}
//         {largeBox}
//       </div>
//       <div>
//         <Box
//           classNameContent={'box--small'}
//           styleContent={{backgroundColor: 'lightblue'}}
//         >
//           small lightblue box
//         </Box>
//         <Box
//           classNameContent={'box--medium'}
//           styleContent={{backgroundColor: 'pink'}}
//         >
//           medium pink box
//         </Box>
//         <Box
//           classNameContent={'box--large'}
//           styleContent={{backgroundColor: 'orange'}}
//         >
//           large orange box
//         </Box>
//       </div>
//     </>
//   )
// }

// Extra Credit 2 Solution:
function Box({size = '', style = '', ...otherProps}) {
  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <>
      <div>
        {smallBox}
        {mediumBox}
        {largeBox}
      </div>
      <div>
        <Box size="small" style={{backgroundColor: 'lightblue'}}>
          small lightblue box
        </Box>
        <Box size="medium" style={{backgroundColor: 'pink'}}>
          medium pink box
        </Box>
        <Box size="large" style={{backgroundColor: 'orange'}}>
          large orange box
        </Box>
      </div>
    </>
  )
}

export default App
