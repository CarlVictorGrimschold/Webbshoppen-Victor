import React from 'react'
import ShowcaseImg from '../../assets/images/products/red-bag.png'

const Trepictures = () => {
    return (
        <section class="trepictures">
            <div class="grid-container">
                <div class="grid">
                    <div class="box"><img src={ShowcaseImg} alt="showcase image" /></div>

                    <div id="box-2" class="box"><img src={ShowcaseImg} alt="showcase image" /></div>
                    <div id="box-3" class="box"><img src={ShowcaseImg} alt="showcase image" /></div>

                </div>
                
            </div>
        </section>
        // <section className="showcase">

        //     <div className="container">

        //           <div className="content">

        //               <div className="title-2">GET UP TO 40% OFF</div>
        //               <div className="title-1">Don't Miss This Opportunity</div>
        //               <div className="title-3">Online shopping free home delivery over $100</div>
        //               <a className="btn-theme" href="#">SHOP NOW</a>
        //           </div>
        //           <img src={ShowcaseImg} alt="showcase image" />
        //     </div>
        // </section>
    )
}

export default Trepictures