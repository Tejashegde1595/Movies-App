import React,{ Component } from 'react';
import './header.css';
import Logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Modal from 'react-modal';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
const TabContainer=(props)=>{
    return(
        <Typography component="div" style={{padding:'5px',textAlign:'center'}}>
            {props.children}
        </Typography>
    )
}
TabContainer.protoTypes = {
    children:PropTypes.node.isRequired
}

class Header extends Component{
    constructor(){
        super();
        this.state = {
            modalIsOpen:false,
            value:0,
            userNameRequired:'dispNone',
            passwordRequired:'dispNone',
            firstNameRequired:'dispNone',
            lastNameRequired:'dispNone',
            emailRequired:'dispNone',
            rPasswordRequired:'dispNone',
            contactRequired:'dispNone',
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            email:'',
            rPassword:'',
            contact:''
        }
    }

    openModalHandler=()=>{
        this.setState({modalIsOpen:true,userNameRequired:'dispNone',value:0,passwordRequired:'dispNone'
        ,firstNameRequired:'dispNone',lastNameRequired:'dispNone',rPasswordRequired:'dispNone',emailRequired:'dispNone',contactRequired:'dispNone'});
    }

    closeModalHandler=()=>{
        this.setState({modalIsOpen:false});
    }

    tabChangeHandler=(event,value)=>{
        this.setState({value});
    }

    loginClickHandler=()=>{
        this.state.username===''?this.setState({userNameRequired:'dispBlock'}):
        this.setState({userNameRequired:'dispNone'})
        this.state.password===''?this.setState({passwordRequired:'dispBlock'}):
        this.setState({passwordRequired:'dispNone'})
    }

    registerClickHandler=()=>{
        this.state.firstName===''?this.setState({firstNameRequired:'dispBlock'}):
        this.setState({firstNameRequired:'dispNone'})
        this.state.lastName===''?this.setState({lastNameRequired:'dispBlock'}):
        this.setState({lastNameRequired:'dispNone'})
        this.state.email===''?this.setState({emailRequired:'dispBlock'}):
        this.setState({emailRequired:'dispNone'})
        this.state.rPassword===''?this.setState({rPasswordRequired:'dispBlock'}):
        this.setState({rPasswordRequired:'dispNone'})
        this.state.contact===''?this.setState({contactRequired:'dispBlock'}):
        this.setState({contactRequired:'dispNone'})
    }

    inputUserNameChangeHandler=(e)=>{
        this.setState({username:e.target.value})
    }

    inputfirstNameChangeHandler=(e)=>{
        this.setState({firstName:e.target.value})
    }

    inputlastNameChangeHandler=(e)=>{
        this.setState({lastName:e.target.value})
    }

    inputRpasswordChangeHandler=(e)=>{
        this.setState({rPassword:e.target.value})
    }

    inputEmailChangeHandler=(e)=>{
        this.setState({email:e.target.value})
    }

    inputContactChangeHandler=(e)=>{
        this.setState({contact:e.target.value})
    }


    render(){

        return(
            <div>
                <header className='header'>
                    <img src={Logo} className='app-logo' alt='logo'></img>
                    <div className='login-button'>
                        <Button variant='contained' color='default' onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <Modal className='container login-modal' ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel='Login' onRequestClose={this.closeModalHandler}>
                    <Tabs  value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label='login'></Tab>
                        <Tab label='register'></Tab>
                    </Tabs>
                    {this.state.value==0 &&
                    <TabContainer className='tabs'>
                        <FormControl required>
                            <InputLabel htmlFor='userName'>Username</InputLabel>
                            <Input id='username' type='text' username={this.state.username} onChange={this.inputUserNameChangeHandler} ></Input>
                            <FormHelperText className={this.state.userNameRequired}><span className='red'>required</span></FormHelperText>
                        </FormControl>
                        <br/>
                        <FormControl required>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' type='password'  password={this.state.password} onChange={this.inputPasswordChangeHandler}></Input>
                            <FormHelperText className={this.state.passwordRequired}><span className='red'>required</span></FormHelperText>
                        </FormControl>
                        <br/>
                        <br/>
                        <Button variant='contained' color='primary' onClick={this.loginClickHandler}>Login</Button>
                    </TabContainer>
                    }
                    {
                        this.state.value==1 &&
                        <TabContainer className='tabs'>
                        <FormControl required>
                            <InputLabel htmlFor='firstName'>First Name</InputLabel>
                            <Input id='firstName' type='text' firstName={this.state.firstName} onChange={this.inputfirstNameChangeHandler} ></Input>
                            <FormHelperText className={this.state.firstNameRequired}><span className='red'>required</span></FormHelperText>
                        </FormControl>
                        <br/>
                        <FormControl required>
                            <InputLabel htmlFor='lastName'>Last Name</InputLabel>
                            <Input id='lastName' type='text' lastName={this.state.lastName} onChange={this.inputlastNameChangeHandler} ></Input>
                            <FormHelperText className={this.state.lastNameRequired}><span className='red'>required</span></FormHelperText>
                        </FormControl>
                        <br/>
                        <FormControl required>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <Input id='email' type='email' email={this.state.email} onChange={this.inputEmailChangeHandler} ></Input>
                            <FormHelperText className={this.state.emailRequired}><span className='red'>required</span></FormHelperText>
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor='rpassword'>Password</InputLabel>
                            <Input id='rpassword' type='password'  rpassword={this.state.rpassword} onChange={this.inputRpasswordChangeHandler}></Input>
                            <FormHelperText className={this.state.rPasswordRequired}><span className='red'>required</span></FormHelperText>
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor='contact'>Contact No</InputLabel>
                            <Input id='contact' type='password'  contact={this.state.contact} onChange={this.inputContactChangeHandler}></Input>
                            <FormHelperText className={this.state.contactRequired}><span className='red'>required</span></FormHelperText>
                        </FormControl>
                        <br/>
                        <br/>
                        <Button variant='contained' color='primary' onClick={this.registerClickHandler}>Register</Button>
                        </TabContainer>
                    }
                </Modal>
            </div>
        )
    }
}

export default Header