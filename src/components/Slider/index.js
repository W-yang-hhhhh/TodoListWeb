import {React,useState} from 'react'
import './index.less'
export default function Slider() {
    const [successList, setsuccessList] = useState([])
    const [failList, setfailList] = useState([])
    return (
        <div className='sliderContainer'>
            <div className="top">
                <div className="progress">
                    <span className='title'>执行率</span>
                    <div className='progress_nav'>
                        <div className='nav'>
                            <span className='naving'></span>
                        </div>
                        <span className='percent'>100%</span>
                    </div>

                </div>
            </div>
            <div className="bottom">
                <div className="successed">
                    <div className="header">
                        <i className='icon iconfont icon-jiangzhang'></i>
                        <span className='title'>已完成</span>
                    </div>
                    <div className='success_list'>
                        {/* {()=>{
                            if(successList.length==0){
                                return empty()
                            }else{
                                return '有数据'
                            }
                        }} */}
                        {
                            successList.length==0? empty():'有数据'
                        }
                    </div>

                </div>
                <div className="failed">
                        <div className="header">
                            <i className='icon iconfont icon-kulian'></i>
                            <span className='title'>已失败</span>
                        </div>
                    <div className='fail_list'>
                    {
                            failList.length==0? empty():'有数据'
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}


function empty(){
    return (
        <div className="empty">
            <i className='kong iconfont icon-kong'></i>
            <span>空空如也</span>
        </div>
    )
}