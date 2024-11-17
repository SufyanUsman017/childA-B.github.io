// import React from 'react'
// import ChildB from './ChildB'


// export default function ChildA(props) {
//   return (
//     <div>
//       <center>
//         <h1>Child {props.name}</h1>
//         <ChildB name={props.grSon}  />
//       </center>
      
//     </div>
//   )
// }

import React from 'react'
import ChildB from './ChildB'

export default function ChildA(props) {
  return (
    <div>
      <center>
        <h1>Child {props.name}</h1>
        <ChildB name={props.taiUsm} />
      </center>
    </div>
  )
}
