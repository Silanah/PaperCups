import React, { Component } from 'react';
import '../scss/components/_header.scss';

import Cups from '../assets/img/mockup4.png';

class Header extends Component {
    state = {};
    render() {
        return(
            <div className='header'>
                <div className='headWrapper'>
                    <div className='headerTxt'>
                        <h1><span>Paper</span> Cups</h1>
                        <h2>Best paper cups ever!</h2>
                        <p>
                            Lorem ipsum dolor sit amet consecetur <span>Paper Cups</span> elit.
                            <br />
                            Delectus illo consectetur eum repudiandae distintio nesciunt!
                        </p>
                        <div className='sendBtn'>
                            <button>
                                <a><span>$5</span> buy now</a>
                            </button>
                        </div>
                    </div>
                    <div className='headImg'>
                        <img
                            src={Cups}
                            alt='cups'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;