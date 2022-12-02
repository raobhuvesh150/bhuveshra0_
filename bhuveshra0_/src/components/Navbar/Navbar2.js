import React, { useState } from 'react'
import Dock from "react-osx-dock";
import Img1 from './woodenImages/img1.jpg'
import Img2 from './woodenImages/img2.jpg'
import Img3 from './woodenImages/img3.jpg'
import Img4 from './woodenImages/img4.jpg'
import Img5 from './woodenImages/img4.jpg'
import Img6 from './woodenImages/img6.jpg'



function Navbar2() {
    // const[size , setSize] = useState(800)
    return (
        <div className=''>
            <Dock width={1000} magnification={1.2} magnifyDirection="center">
                {[Img1,Img2,Img3,Img4,Img5,Img6,Img1,Img2,Img3,Img4,Img5,Img6 ,Img1,Img2,Img3,Img4,Img5,Img6].map((item, index) => (
                    <Dock.Item key={index} onClick={() => console.log(item)}>
                        <img className='w-75' src={`${item}`} />
                    </Dock.Item>
                ))}
            </Dock>

        </div>
    )
}

export default Navbar2