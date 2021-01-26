import React, { Component } from 'react';
import '../scss/components/_offer.scss';

class Offer extends Component {
    state = {};
    render() {
        return(
            <div className='offer'>
                <div className='offerWrapper'>
                    <div className='offerTxt'>
                        <div>
                        <h3>Do you like <span>paper cup</span>?</h3>
                        </div>
                        <div>
                        <button>
                            <a><span>$5</span> Buy now</a>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Offer;