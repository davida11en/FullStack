import React from 'react';

function SellSplash() {
    return (
        <main className="sellcontainer"> 
            <div className="sellerlanding">
                <div className='sellerwrapper'>
                    <h1 className="sellertitle">Explore Your Selling Options</h1>
                    <br></br>
                    <p>Wherever you are in the selling journey, new opportunities await 💸</p>
                </div>
            </div>
            <div className='sellvaluationcontainer'>
                <h2 className='sellvaltitle'>Enter Your Address to Unlock Your Owner Dashboard</h2>

                    <div className='blurbs'>

                        <div className='leftblurb'> 
                            <h3 className='blurbtitle'>
                                See Your StreetEasy Valuation
                            </h3>
                            <p className='blurbP'>
                                Get an instant, hassle-free estimate of your home’s value, powered by the most expansive real estate database in NYC.
                            </p>
                        </div>

                        <div className="seperator" />

                        <div className='rightblurb'> 
                            <h3 className='blurbtitle'>
                                Get Matched With a Trusted Agent  
                            </h3>
                            <p className='pp'>
                                Ready to sell? Just have questions? We can recommend listing agents who’ve closed on homes just like yours.
                            </p>
                        </div>
                    </div>

                    
            </div>

        </main>
    )
}

export default SellSplash;