import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Service = () => {



    return (
        <div className='service'>
            


                <div className='bottom1'>
                    <NavLink className="link" to="/search"><i className="fa-light fa-headset"></i></NavLink>
                   
                        <p>Customer Support</p>
                        <p>Village did removed enjoyed explain talking.</p>
                  
                </div>
                <div className="bottom1">
                    <NavLink className="link" to="/compare"><i class="fa-regular fa-credit-card"></i></NavLink>
                    <p>Safe Payment</p>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="bottom1">
                    <NavLink className="link" to="/favorites"><i class="fa-light fa-truck"></i></NavLink>
                    <p>Free Home Delivery</p>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="bottom1">
                    <NavLink className="link" to="/favorites"><i class="fa-light fa-truck"></i></NavLink>
                    <p>30 Day Reuters</p>
                    <p>Village did removed enjoyed explain talking.</p>

                </div>
            </div>
       



            )
}

            export default Service