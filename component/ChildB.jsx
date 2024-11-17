// import React from 'react'
// import ChildC from './ChildC'

// export default function ChildB(props) {
//   return (
//     <div>
//       <center>
//         <h1>Child {props.name}</h1>
    
//         <ChildC name={props.bro}  />
//       </center>
//     </div>
//   )
// }

import React from 'react'
import ChildC from './ChildC'


export default function ChildB(props) {
  return (
    <div>
      <center>
        <h1>Child {props.name}</h1>
        <ChildC name={props.suName}/>
      </center>
    </div>
  )
}
