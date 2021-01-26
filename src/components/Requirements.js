import React, { Component } from 'react';
import '../scss/components/_requirements.scss';

import PS from '../assets/img/ps.png';

class Requirements extends Component {
    state = {};
    render() {
        return(
            <div className='req'>
                <div className='reqWrapper'>
                    <div className='reqTxt'>
                        <h2>requirements</h2>
                        <h3>Adobe Photoshop CS4+</h3>
                    </div>
                    <div className='reqImg'>
                        <img
                            src={PS}
                            alt='ps_icon'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Requirements;