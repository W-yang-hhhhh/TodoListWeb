import './index.less'
import React from 'react'

export default function Mask() {
    
    return (
        <div className='maskContainer'>
           

            <div className='form'>
                    <div className="header">
                        <span>添加</span>
                        <i className='iconfont icon-guanbi'></i>
                    </div>

                    <div className="body">
                        <div className='unit'>
                            <label htmlFor="title">标题:</label>
                            <input type="text" id='title'/>
                        </div>
                        <div className='unit'>
                            <label htmlFor="startTime">开始时间:</label>
                            <input type="date" id='startTime'/>
                        </div>
                        <div className='unit'>
                            <label htmlFor="endTime">结束时间:</label>
                            <input type="date" id='endTime' />
                        </div>
                        <div className='unit'>
                            <label htmlFor="type">计划类型:</label>
                            <select id="type" >
                                <option>每天</option>
                                <option>周次</option>
                            </select>
                        </div>
                        <div className='unit'>
                            <label htmlFor="desc" className='unit_desc'>描述:</label>
                            <textarea name="" id="desc" cols="32" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="footer">
                        <div className='btn cancel'>取消</div>
                        <div className='btn confirm'>确认</div>
                    </div>
            </div>
        </div>
    )   
}


