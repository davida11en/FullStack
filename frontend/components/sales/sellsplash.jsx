import React from 'react';
import { Link } from 'react-router-dom';

function SellSplash(props) {
    return (
        <main className="sell-container"> 
            <div className="seller-landing">
                <div className='seller-wrapper'>
                    <h1 className="seller-title">Explore Your Selling Options</h1>
                    <br></br>
                    <p className="sell-tit-P">Wherever you are in the selling journey, new opportunities await 💸</p>
                </div>
            </div>
            <div className='sell-valuation-container'>
                <h2 className='sell-val-title'>Enter Your Address to Unlock Your Owner Dashboard</h2>

                    <div className='blurbs'>

                        <div className='left-blurb'> 
                            <h3 className='blurb-title'>
                                See Your EasyStreet Valuation
                            </h3>
                            <p className='blurb-P'>
                                Get an instant, hassle-free estimate of your home’s value, powered by the most expansive real estate database in NYC.
                            </p>
                        </div>

                        <div className="seperator" />

                        <div className='right-blurb'> 
                            <h3 className='blurb-title'>
                                Get Matched With a Trusted Agent  
                            </h3>
                            <p className='blurb-P'>
                                Ready to sell? Just have questions? We can recommend listing agents who’ve closed on homes just like yours.
                            </p>
                        </div>
                    </div>
                <div className='form-container'>  
                    <form className='val-form'>
                        <label className='val-form-cap'> Street Address
                            <input 
                                className='st-add' 
                                // type='hidden' 
                                placeholder='123 Street Name, New York, NY 00000' 
                                />
                        </label>
                        <label className='val-form-cap'> Apartment
                            <input 
                                className='st-add' 
                                // type='hidden' 
                                />
                        </label>  
                        <button className='sell-form-btn' type="submit">
                            Get Started
                        </button>
                    </form>  
                    <p className='blurb-P'>
                        Are you a returning home owner? {'  '}
                        
                        
                        <Link to={{}} 
                            className="sell-submes-link" 
                            onClick={() => props.openModal("login")}>
                    
                            Log in 
                        </Link>
                        
                         {'  '} to view your Owner Dashboard.
                    </p>  
                </div> 
            </div>

        </main>
    )
}

export default SellSplash;