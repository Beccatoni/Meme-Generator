import React, { useState } from 'react'

const Box = (props) => {

    // const [on, setOn] = useState(props.on)

    const styles = {
        backgroundColor : props.on ? "#222222" : "transparent",
        borderRadius: "10px" 
    }

    // const toggle = () => {
    //     setOn(prevOn => !prevOn)
    // }
  return (
    <div style={styles}  className='inline-block border-2 border-black h-36 w-36' onClick={() => props.toggle(props.id)}>

    </div>
  )
}

export default Box