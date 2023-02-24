import React from 'react'

const Title = ({ book, chapter }) => {

    return (<div className='mainContainer'>
        <div className='titleSection card tc pa3  shadow-5'>
            <h1 className='title ma1'> {book} </h1>
            <span className=' dim subtitle' onClick={() => window.open(`https://sunnah.com/bukhari/81`, "_blank")}
            >{chapter}
            </span>
        </div>
    </div>

    )
}

export default Title