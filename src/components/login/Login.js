import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            formValid:false,
            errorCount:null,
            email:'',
            password:'',
            errors:{
                email:'',
                password:''
            }
        }
    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
          (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }
      
    countErrors = (errors) => {
        let count = 0;
        Object.values(errors).forEach(
            (val) => val.length >= 0 && (count = count+1)
        );
        return count;
    }

    handleChange = e =>{
        let errors = this.state.errors;
        const {name,value} = e.target;  
        
        switch(name){
            case 'email':
                errors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?'':'E-mail is not valid';
                break;
            case 'password':
                errors.password = value.length < 8 ? 'Password must be 8 character long!':'';
                break;
            default:
                break;                
        }
        this.setState({errors,[name]: value,formValid : this.validateForm(this.state.errors),errorCount: this.countErrors(this.state.errors)});   
    }

    handleSubmit = e => {
        e.preventDefault();
        // this.setState({formValid: this.validateForm(this.state.errors)});
        // this.setState({errorCount: this.countErrors(this.state.errors)});
        console.log(this.state);
    }

    
    render(){
        const {errors, formValid} = this.state;        
        return(
            <div className='login_page'>                 
                <div className="container">
                    {/* <h1 class="form-heading">login Form</h1> */}
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <div className="panel">
                                    <h1>Login</h1>
                                    <p>Please enter your email and password</p>
                                </div>
                                <form onSubmit={this.handleSubmit}> 
                                    <div className="form-group">
                                        <input type='email' 
                                                placeholder='E-mail' 
                                                name='email' 
                                                value={this.state.email}
                                                onChange={this.handleChange} 
                                                className='form-control'
                                                required
                                                />
                                                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                                    </div>

                                    <div className="form-group">
                                        <input type='password' 
                                                placeholder='Password' 
                                                name='password' 
                                                value={this.state.password}
                                                onChange={this.handleChange} 
                                                className='form-control'
                                                required
                                                />
                                                {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                                    </div>

                                    <div className="form-group">                                        
                                        {   this.state.email !== '' && this.state.password !== '' && formValid ?
                                            <input type='submit' value='Login' className='btn btn-primary' />:
                                            <input type='submit' value='Login' className='btn btn-primary' disabled/>                                   
                                        }
                                    </div>
                                    <div className='form-group'>
                                        <h6>
                                            Do not have an account?
                                            <Link  to={'/register'} > Register Now</Link>
                                        </h6>
                                    </div>
                                </form>                                 
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }  
}

export default Login;