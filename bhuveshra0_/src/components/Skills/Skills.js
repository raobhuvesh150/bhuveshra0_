import React from 'react'


import Reactimg from './images/reactimg.png'
import Nextimg from './images/nextimg.png'
import Cssimg from './images/cssimg.png'
import Bootstrapimg from './images/bootstrapimg.png'
import Htmlimg from './images/htmlimg.png'
import Materailimg from './images/materialimg.png'
import Jsimg from './images/jsimg.png'
import Antd from './images/ANTD.png'


function Skills() {
    return (
        <div className='bg-homeTheme'>
            <div className='d-flex justify-content-center m-auto flex-column flex-md-row'>
                <img style={{ width: '100px', padding: '50px' }} className="d-sm-block d-md-inline-block m-auto" src={Reactimg}></img>
                <img style={{ width: '100px', padding: '50px' }} className="d-sm-block d-md-inline-block m-auto" src={Jsimg}></img>
                <img style={{ width: '100px', padding: '50px' }} className="d-sm-block d-md-inline-block m-auto" src={Htmlimg}></img>
                <img style={{ width: '100px', padding: '50px' }} className="d-sm-block d-md-inline-block m-auto" src={Nextimg}></img>
            </div>
            <div className='d-flex justify-content-center m-auto flex-column flex-md-row'>
                <img style={{ width: '100px', padding: '50px' }} className="d-sm-block d-md-inline-block m-auto" src={Cssimg}></img>
                <img style={{ width: '100px', padding: '50px' }} className="d-sm-block d-md-inline-block m-auto" src={Bootstrapimg}></img>
                <img style={{ width: '100px', padding: '50px' }} className="d-sm-block d-md-inline-block m-auto" src={Materailimg}></img>
                <img style={{ width: '100px', padding: '50px' }} className="d-sm-block d-md-inline-block m-auto" src={Antd}></img>
            </div>
        </div>
    )
}

export default Skills