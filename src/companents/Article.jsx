import React from 'react'
import Cards1 from '../images/Cards1.png'
import Cards2 from '../images/Cards2.png'
import Cards3 from '../images/Cards3.png'
import Cards5 from '../images/Cards5.png'
import İcon from '../images/icon.png'
import Ellipse1 from '../images/Ellipse2.jpg'
import Ellipse2 from '../images/ellipse3.png'
import Cards6 from '../images/cards6.jpeg'
import Cards7 from '../images/cards7.jpeg'
import Cards8 from '../images/cards8.jpeg'
import Clock from '../images/Clock.png'




function Article () {
    return (
        <>
        <div className='Article'>
            <div className="row">
                <div className="com-sm">
                        <div className="Title">
                            <h3 className="Title1">#designed for everybody</h3>
                             <h1 className="Title2">Discover your skin's perfect match.</h1>
                        </div>
                </div>
            </div>   
        
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Supplement Series</h3>
                        <p>Your daily routine</p>
                        <hr />
                    </div>
                    <div className="col">
                        <h3>Must haves</h3>
                        <p>Essential for holistic health</p>
                        <hr />
                    </div>
                    <div className="col">
                        <h3>Bundles & Kits</h3>
                        <p>Packages for daily needs</p>
                        <hr />
                     </div>
                </div>
            </div> 
            <div className="container text-center">
                <div className="row row-cols-4">
                    <div className="col">
                    <div className="card">
                        <img src={Cards1} className="card-img-top" />
                        <h5 className="card-title-1">Find the perfect fit for you </h5>
                        <span className='Span'></span>     
                        <span className='Span-1'>Take the quiz  </span> 
                    </div>
                    </div>
                    <div class="col">
                    <div className="card">
                        <img src={Cards2} className="card-img-top rounded-circle" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Multivitamin 18+</h5>
                                <p className="card-text"> Personalized prescription skin care</p>
                                
                                <span className='Span-2'>Add to cart - $12  </span> 
                            </div>
                    </div>
                    </div>
                    <div class="col">
                    <div className="card">
                        <img src={Cards2} className="card-img-top rounded-circle" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Postnatal Multivitamin</h5>
                                <p className="card-text">Personalized prescription skin care</p>
                                
                                <span className='Span-2'>Add to cart - $12  </span> 
                            </div>
                    </div>
                    </div>
                    <div class="col">
                    <div className="card">
                        <img src={Cards2} className="card-img-top rounded-circle" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Vita-min</h5>
                                <p className="card-text"> Personalized prescription skin care</p>
                                
                                <span className='Span-2'>Add to cart - $12  </span> 
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="carousel-slide">
                <div className="carousel-inner">
                    <div className="carousel-item-active">
                        <img src={Cards3}  alt="" className='Cards3'/>
                        <span className='Carousel'>Join the safe space of community!</span>
                        <span className='Carousel-2'></span>     
                        <span className='Carousel-1'>Join today - it’s free  </span> 
                    </div>
                </div>
            </div>
            <div className="Son text-center">
                <img src={Cards5} alt="" className='Cards5' />
                <span className='Says'> Says</span>
                <img src={İcon} alt="" className='İcon' />
                <p className="Sontext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div className="row">
                <div className="com-sm">
                        <div className="Frame">
                            <h3 className="FrameTitle">#Evidence-based Information</h3>
                             <h1 className="FrameP">The Science of Wellness</h1>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="Cards">
                        <img src={Cards6} className="Cards6" alt="..."/>
                        <p className=" Card card-text"> 14 Supplements to Manage Your Cortisol Levels</p>
                        <span>
                            <p className=" Card-1 card-text">5 mins read</p>
                        </span>
                        
                    </div>
                </div>
                <div className=" Cards-radius col-sm">
                    <div className="Cards">
                        <img src={Cards7} className="Cards6" alt="..."/>
                        <p className="Card  card-text"> What are the Best Vitamins to Help Brain Fog? Experts Explain</p>
                        <span>
                            <p className=" Card-1 card-text">5 mins read</p>
                        </span>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="Cards">
                        <img src={Cards8} className="Cards6" alt="..."/>
                        <p className="Card  card-text"> The Ultimate Guide to Superfoods, unlock your nutrition</p>
                        <span>
                            <p className=" Card-1 card-text">5 mins read</p>
                        </span>
                    </div>
                </div>

            </div>
            {/* <div className="row">
                <div className="col-sm">
                    <div className="card" >
                             <img src={Cards6} className="Cards6" alt="..."/>
                             <p className="card-text"> Supplements to Manage Your Cortisol Levels</p>
                    </div>
                </div>
                <div className="section3 col-sm">
                <div className="card" >
                             <img src={Cards7} className="Cards7" alt="..." />
                             <p className="card-text">What are the Best Vitamins to Help Brain Fog? Experts Explain</p>
        
                    </div>
                </div>
                <div className="col-sm">
                <div className="card" >
                             <img src={Cards8} className="Cards8" alt="..."/>
                             <p className="card-text"> The Ultimate Guide to Superfoods, unlock your nutrition</p>
                    </div>
                </div>
            </div> */}
        </div>
        </>
    ) 
}

export default Article








