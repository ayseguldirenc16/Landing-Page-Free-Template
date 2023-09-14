import React from 'react'
import resim1 from '../images/resim1.png'
import resim2 from '../images/resim2.png'
import Chat from '../images/Chat.png'
import Gift from '../images/Gift.png'
import Star from '../images/Star.png'
import './header.css'


function Header () {
    return (
        <>
        <div className='Ortahat'>
            <p className='Metin1'> Your unique blend for optimal health and wellness.</p>
            <img src= {resim1} alt="" className='image1'/>
            <img src= {resim2} alt="" className='image2'/>
            <div className="text" >
              <span className="alttext">
                <p className="altmetin"> Take a quiz - it’s free</p>
              </span>
              
            </div>  
            <div className="grid text-center" >
              <div className="row md-4">
                <div className="col">
                  <img src={Chat} alt="chat" className='Chat'/>
                  <h3>Your Supplement Quiz</h3>
                  <p>Discover tailored results just for you in 
                  our quick 2-minute free quiz!</p>
                </div>
            <div className="col">
              <img src={Gift} alt="Gift" className='Gift'/>
              <h3>Customized Recommendations</h3>
              <p>Find your perfect supplements based on your
                unique needs and goals!</p>
            </div>
            <div className="col">
              <img src={Star} alt="Star" className='Star'/>
              <h3>Building Habits</h3>
              <p>Embark on your path to better health with expert guidance every step of the way</p>
            </div>
          </div>
        </div> 
        
</div>
        
        
       </>
        
    )
}

export default Header