import Header from '../../components/Header'
import Slider  from '../../components/Slider'
import Card from '../../components/Card'
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
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="slider">
                    <Slider/>
                </div>
            </div>
        </div>
    )
}
