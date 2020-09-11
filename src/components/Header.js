import React from 'react'

const Header = (props) => {
    return <div 
        className="header" 
        style={{backgroundImage: "url(" + (props.imageUrl || "/https://www.uliege.be/upload/docs/image/jpeg/2018-01/bloca-cp-oxygeneocean.jpg" ) + ")"}}
    >
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button>{props.buttonText}</button>
    </div>
}

export default Header