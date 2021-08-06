import Header from '../../components/Header'
import Slider  from '../../components/Slider'
import Card from '../../components/Card'
import Mask from '../../components/mask'
import React from 'react'
import './index.less'
export default function Home() {
    return (
    
       <React.Fragment>
        <div className='home'>
            <div className="header">
            <Header/>  
            </div>


            <div className="body">
                <div className="home_content">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <div className="add">
                        <i className='iconfont icon-jia'></i>
                    </div>
                </div>
                <div className="slider">
                    <Slider/>
                </div>
            </div>
        </div>
        <Mask/>
        </React.Fragment>
    )
}
