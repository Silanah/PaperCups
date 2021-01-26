import React, { Component } from 'react';
import '../scss/components/_contact.scss'

class Contact extends Component {
    state = {};
    render() {
        return(
            <div className='contact'>
                <div className='contactWrapper'>
                    <div className='contactTxt'>
                        <h2>contact me</h2>
                        <p>For any questions fill in the form below and we'll get back to you ASAP!</p>
                    </div>
                        <form className='contactForm'>
                            <div className='formLabels'>
                                <div className='nameEmail'>
                                    <input
                                        className='nameInput'
                                        type='text'
                                        id='name'
                                        name='name'
                                        placeholder='Your name'
                                    />
                                    <input
                                        className='emailInput'
                                        type='text'
                                        id='email'
                                        name='email'
                                        placeholder='Your email'
                                    />
                                </div>
                                <textarea
                                    type='text'
                                    id='text'
                                    name='text'
                                    rows='5'
                                    placeholder='Your message'
                                />
                            </div>
                            <button>
                                <a>Send Message</a>
                            </button>
                        </form>
                </div>
            </div>
        )
    }
}

export default Contact;