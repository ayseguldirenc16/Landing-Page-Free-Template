import Vector from '../images/Vector.png'
import Plus from '../images/Plus.png'


function Section (){
    return (
        <>
        <div className="Section3">
            <div className="Sectiontext">
                <p className="Sectiontext-1">
                #All the help you need
                </p>
                <p className="Sectiontext-2">
                We know you are curious!
                </p>
            </div>
            <div>
                <div className="SText">
                    <h3 className='Sbaslik' >How do I choose the right supplement for my needs?</h3>
                    <p className='Smetin'>We offer a personalized quiz that takes into account your specific health goals, dietary preferences, and lifestyle factors. Based on your responses, we provide tailored recommendations to help you find the supplements that best suit your needs.
                    </p>
                    <img src={Vector} className='Simg' alt="" />
                    <hr className='Shr' />
                    
                </div>
                <div>
                    <h3 className='Sbaslik1'>Can I take multiple supplements together?</h3>
                    <img src={Plus} className='Simg1' alt="" />
                    <hr className='Shr1' />
                </div>
                <div>
                    <h3 className='Sbaslik2'>Are your supplements suitable for vegetarians/vegans?</h3>
                    <img src={Plus} className='Simg2' alt="" />
                    <hr className='Shr2' />
                </div>
                <div>
                    <h3 className='Sbaslik3'>Still have questions?</h3>
                    
                </div>
                <div>
                <p className='Smetin1'>Visit the FAQs page</p>
                
                </div>
            </div>
            
           
        </div>
        </>
    )
}

export default Section