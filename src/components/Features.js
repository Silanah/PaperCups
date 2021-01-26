import React, { Component } from 'react';
import '../scss/components/_features.scss';

import demo1 from '../assets/img/demo1.jpg';
import demo2 from '../assets/img/demo2.jpg';
import demo3 from '../assets/img/demo3.jpg';

class Features extends Component {
    state = {};
    render() {
        return(
            <div className='features'>
                <div className='featuresWrapper'>
                    <div className='featuresTxt'>
                        <h2>features</h2>
                        <h3>We are here for you</h3>
                    </div>
                    <div className='featuresImgs'>
                        <div className='imgWrap'>
                            <img
                                src={ demo1 }
                                alt='cups'
                            />
                            <h3>organised layers</h3>
                            <p>Nodal point courier towards decay
                                dome advert wonton soup chrome voodoo.
                            </p>
                        </div>
                        <div className='imgWrap'>
                            <img
                                src={ demo2 }
                                alt='cups'
                            />
                            <h3>smart obcject</h3>
                            <p>Table plastic concrete silent nano-dome
                                industrial grade. Hotdog marketing.
                            </p>
                        </div>
                        <div className='imgWrap'>
                            <img
                                src={ demo3 }
                                alt='cups'
                            />
                            <h3>transparent bg</h3>
                            <p>Grenade wonton soup faded disposable dome
                                cardboard spook refrigerator dolphin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;