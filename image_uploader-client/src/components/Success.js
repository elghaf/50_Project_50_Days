import React from 'react'

export const Success = ({uri}) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(uri);
    }
    return (

        <>
            <i className = 'fa-solid fa-circle-check'></i>
            <p className = 'title'>Uploaded Successfully!</p>
            <div className = 'image'>
                <img src= {uri} alt = 'imagen'/>
            </div>

            <div className="image-link">
                <a href={uri}>{ uri }</a>
                <button 
                    className="copy"
                    onClick={ handleCopy }
                >
                    Copy
                </button>
            </div>
        </>
    )
}