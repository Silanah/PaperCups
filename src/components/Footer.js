import React, { Component } from 'react';
import '../scss/components/_footer.scss';

import FB from '../assets/img/fb-icon.png';
import YT from '../assets/img/yt-icon.png';
import Twit from '../assets/img/twitter-icon.png';

class Footer extends Component {
    state = {};
    render() {
        return(
            <div className='footer'>
                <div className='footerWrapper'>
                    <div className='footerTxt'>
                        <h5>Copyright © 2020</h5>
                    </div>
                    <div className='footerMedia'>
                        <div className='fbIcon'>
                            <a href='#'><img src={ FB } /></a>
                        </div>
                        <div className='ytIcon'>
                            <a href='#'><img src={ YT } /></a>
                        </div>
                        <div className='twitterIcon'>
                            <a href='#'><img src={ Twit } /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;