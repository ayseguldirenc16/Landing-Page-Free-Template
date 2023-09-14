import React from "react"
import Footerimage from '../images/Footer.png'
import İnsta  from '../images/insta.png'
import Tiktok from '../images/tiktok.png'




function Footer () {
    return(
        <>

            <div className="Footer row">
                <div className=" Ftext  ">
                     <h4 className='Fbaslik'>Follow Us</h4>
                     <p className='Fmetin'>Meet Our Community</p>
                     <p className='Fmetin1'>Join the @Soso and share your voice with us.</p>
                     <img src={Footerimage} className="Fimg" alt="" />  
                </div>
                <div className="Social">
                    <span className="Span-insta">
                        <img src={İnsta} className="İnsta" alt="" />
                        <p className="Instagram"> Instagram</p>
                        <p className="Soso">@SoSo</p>
                    </span>
                    <span className="Span-tiktok">
                        <img src={Tiktok} className="Tik" alt="" />
                        <p className="Tiktok">Tiktok</p>
                        <p className="Soso1">@SoSo</p>
                    </span>
                </div>
                
            </div>
        </>
    )
}

export default Footer
