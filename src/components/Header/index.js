import './index.less'
import React from 'react'

export default function Header() {
    
    return (
        <div className='headerContainer'>
            <div className="left">
               <i className='logo iconfont icon-logo'></i>
                <span className='title'>TODOLIST</span>
            </div>
            <div className="right">
                <i className='tixing iconfont icon-tixing'></i>
                <span className="info">
                    已用1K,61b，总容量5M
                </span>
            </div>
        </div>
    )   
}


