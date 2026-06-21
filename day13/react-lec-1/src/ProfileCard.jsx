import "./Profile.css"

export function Profile({name,age,role="Student",gender,company}) {
  return(
    <div className="Container">
      <div className="Info">
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h3>{role}</h3>
      <h3>{gender}</h3>
      <h3>{company}</h3>
</div>
    </div>
  )
}
// Student is the default props 



// export function Profile({props}) {
//   return(
//     <div>
//       <h2>{props.name}</h2>
//       <h3>{props.age}</h3>
//       <h3>{props.role}</h3>

//     </div>
//   )
// }