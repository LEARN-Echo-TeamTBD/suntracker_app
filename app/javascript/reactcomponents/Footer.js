/** @format */

import React from 'react'
import Sunlogo from '../../assets/images/sunlogo2.png'

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer' id='app-footer'>
                <div className='container'>
                    <div className='logo'>
                        <img className='logo' src={Sunlogo} alt='logo' />
                    </div>
                    <p className='text-primary f-d'>
                        Copyright &copy;
                        {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer
