// import React from 'react'
// import ChildA from './component/ChildA'


// export default function App() {

// let son = "Sufyan"
// let grandSon = "Taimoor"
// let grandPaa = "Fahad"

//   return (
//     <div>
//       <center>
//         <h1>Parents  </h1>
//         <ChildA name={son} grSon={grandSon} bro={grandPaa} />
//       </center>
      
//     </div>
//   )
// }

import React from 'react'
import ChildA from './component/ChildA'

export default function App() {

  let bigSon = "Fahad Usman"
  let midSon = "Taimoor Usman"
  let litSon = "Sufyan Usman"


  return (
    <div>
      <center>
      <h1>Parent</h1>
      </center>
      
      <ChildA name={bigSon} taiUsm={midSon} suName={litSon} />
    </div>
  )
}
