import React from 'react'
import './index.less'
export default function Header() {
    
    return (
        <div className='headerContainer'>
            <div className="left">
                <img src="" alt="logo" />
                <span className='title'>TODOLIST</span>
            </div>
            <div className="right">
                <i></i>
                <span className="info">
                    已用1K,61b，总容量5M
                </span>
            </div>
        </div>
    )   
}


