import React,{ Component } from 'react';
import './header.css';
import Logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button'
class Header extends Component{
    render(){
        return(
            <div className='header'>
                <img src={Logo} className='app-logo' alt='logo'></img>
                <div className='login-button'>
                <Button variant='contained' color='default'>Login</Button>
                </div>
            </div>
        )
    }
}

export default Header