import React, { Component } from 'react';
import '../scss/components/_includes.scss';

import Cups from '../assets/img/mockup4.png';

class Includes extends Component{
    state = {};
    render() {
        return(
            <div className='includes'>
                <div className='includesWrapper'>
                    <div className='imgContainer'>
                        <div className='includesImg'>
                            <img
                                src={Cups}
                                alt='cups'
                            />
                        </div>
                    </div>
                    <div className='txtContainer'>
                        <div className='includesTxt'>
                            <h3>See what's included</h3>
                            <ul>
                                <li>
                                    Changeable lid color
                                </li>
                                <li>
                                    Changeable cup color
                                </li>
                                <li>
                                    Changeable cup label via smart object
                                </li>
                                <li>
                                    On/off shadows
                                </li>
                                <li>
                                    On/off specular
                                </li>
                                <li>
                                    Changeable background
                                </li>
                                <li>
                                    High resolution 3000 x 1875
                                </li>
                            </ul>
                            <div className='sendBtn'>
                                <button>
                                    <a><span>$5</span> buy now</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Includes;