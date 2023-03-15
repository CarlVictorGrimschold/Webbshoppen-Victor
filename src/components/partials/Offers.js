import React from 'react'
import Office from '../../assets/images/office-style.png'
import Party from '../../assets/images/party-style.png'
const Offers = () => {
    return (
    <div className="offer-grid container-fluid">
        <div id="office-style" className="box"><img src={Office} /></div>
       
        <div className ="offer">
            <div className="red-border">
                <div className="content">
                    <h1>50% Offer</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore</p>
                    <a className="btn-theme2" href="#">FLASH SALE</a>
                </div>
            </div>
        </div>
     
        <div id="party-style" className="box"><img src={Party} /></div>
     
     </div>

    );
}

export default Offers;


