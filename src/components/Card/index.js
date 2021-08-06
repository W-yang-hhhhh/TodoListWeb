import React from 'react'
import './index.less'
export default function index() {
    return (
        <div className='cardContainer'>
            <div className="title">
                redux实验总结
            </div>
            <div className="content">
                <div className="desc">
                    把 redux的文章总结并且输出一篇文章。大概花费一天时间
                </div>
                <div className="currentTime">
                    <span className='sTime'>开始时间：2020-2-3</span>
                    <span className='cTime'>结束时间：2020-2-3</span>
                    <span>
                        周次
                    </span>
                </div>
            </div>
        </div>
    )
}
