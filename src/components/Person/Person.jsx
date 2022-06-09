// CON CLASES

// import React, { Component } from 'react'
  
//   export class Person extends Component {
//     render() {
//       return (
//           <div>
//             <span>
//                 Nombre: {this.props.persons.name}<br />
//                 Apellido: {this.props.persons.surname}<br />
//                 Edad: {this.props.persons.age}
//             </span>
//           </div>        
//       )
//     }
//   }
  
//   export default Person

// FUNCIONAL

  const Person = ({persons}) => {
    return (
        <span>
            Nombre: {persons.name}<br />
            Apellido: {persons.age}<br />
            Edad: {persons.surname}<br />
        </span>
    )
  }
  
  export default Person
  