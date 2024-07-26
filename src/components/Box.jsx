import React from 'react'

const Box = (props) => {

    const styles = {
        backgroundColor : props.on ? "#222222" : "#cccccc",
        borderRadius: "10px" 
    }
  return (
    <div style={styles}  className='inline-block border-2 border-black h-36 w-36'>

    </div>
  )
}

export default Box