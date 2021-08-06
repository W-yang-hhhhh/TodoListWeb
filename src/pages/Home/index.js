import Header from '../../components/Header'
import Slider  from '../../components/Slider'
import React from 'react'
import './index.less'
export default function Home() {
    return (
        <div className='home'>
            <div className="header">
            <Header/>  
            </div>


            <div className="body">
                <div className="content">
                    内容
                </div>
                <div className="slider">
                    <Slider/>
                </div>
            </div>
        </div>
    )
}
