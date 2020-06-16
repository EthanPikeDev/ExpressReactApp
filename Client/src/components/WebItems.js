import React from 'react'

// import external stylesheet
import './styles/WebItems.css'

const WebItems = ({ items }) => {
    // items props will be passed in and (data will be set to items props) meaning the data we will get from the server/backend
    return (
        <>
            <h3
                className="listTitle"
            >
                Your List of Web Projects ℹ </h3>
            {items.map(item => (
                <li 
                    key={item.id}
                    className="styledList"
                >
                    <div>
                        <span className="styledListItem">{Object.values(JSON.stringify(item.id))}</span>
                        <span className="styledListItem">{Object.values(item.title)}</span>
                    </div>
                    <span className="styledListItem">{Object.values(item.description)}</span>
                </li>
            ))}
        </>
    )
}

export default WebItems