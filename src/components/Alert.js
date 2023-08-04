import React from 'react'

function Alert(props) {
  return (
   props.alert && <div className={`alert alert-${props.alert.mode ==='light'?'dark':'light'} alert-dismissible fade show`} role="alert" >
   <strong>{props.alert.type}</strong> {props.alert.message}
 </div>
  )
}

export default Alert
