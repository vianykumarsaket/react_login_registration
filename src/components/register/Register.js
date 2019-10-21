import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component{
    
    constructor(props){        
        super(props);
        this.state={
            formValid:false,
            errorCount: null,
            fullname:'',
            mobile:'',
            email:'',
            password:'',
            repassword:'',
            errors:{
                fullname:'',
                mobile:'',
                email:'',
                password:'',
                repassword:''
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
            (val) => val.length > 0 && (count = count+1)
        );
        return count;
    }

    handleChange = e =>{        
        const {name,value} = e.target;
        let errors = this.state.errors;

        switch(name){
            case 'fullname':
                value.length <=0 ?
                errors.fullname = 'Full name is required':
                errors.fullname = value.length < 5 ? 'Full name must be 5 characters long!':'';;
                break;
            case 'email':    
                value.length <=0 ?
                errors.email = 'E-mail is required':            
                errors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '':'E-mail is not valid!';
                break;
            case 'mobile':
                value.length <=0 ?
                errors.mobile = 'Mobile number is required':
                errors.mobile = value.match(/^[0]?[6789]\d{9}$/)? '':'Mobile Number is not valid!';;             
                break;
            case 'password':
                value.length <=0 ?
                errors.password = 'Password is required':
                errors.password = value.length < 8 ? 'Password must be 8 characters long!':'';;
                break;            
            default:
                break;
        }

        this.setState({errors, [name]: value,formValid : this.validateForm(this.state.errors),errorCount: this.countErrors(this.state.errors)});
    }

    handleChangeRePassword = e =>{
        let errors = this.state.errors;
        const {name,value} = e.target;
        if(this.state.password === value){
            errors.repassword = '';            
        }else{            
            errors.repassword = 'Password does not matched!';
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
            <div className='register_page'>                 
                <div className="container">                   
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <div className="panel">
                                    <h1>Register</h1>
                                    <p>Please enter your details</p>
                                </div>
                                <form onSubmit={this.handleSubmit}> 
                                    
                                    <div className="form-group">
                                        <input type='text' 
                                                onChange={this.handleChange} 
                                                value={this.state.fullname} 
                                                placeholder='Full Name' 
                                                name="fullname" 
                                                className='form-control'
                                                required
                                                />
                                                {errors.fullname.length > 0 && <span className='error'>{errors.fullname}</span>}
                                    </div>                                    

                                    <div className="form-group">
                                        <input type='email' 
                                                onChange={this.handleChange} 
                                                value={this.state.email} 
                                                placeholder='E-mail' 
                                                name='email'
                                                className='form-control' 
                                                required
                                                />
                                                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                                    </div>

                                    <div className="form-group">
                                        <input type='text' 
                                                onChange={this.handleChange} 
                                                value={this.state.mobile} 
                                                placeholder='Mobile' 
                                                name='mobile'
                                                className='form-control'
                                                maxLength='10' 
                                                required
                                                />
                                                {errors.mobile.length > 0 && <span className='error'>{errors.mobile}</span>}
                                    </div>                      

                                    <div className="form-group">
                                        <input type='password' 
                                                onChange={this.handleChange} 
                                                value={this.state.password} 
                                                placeholder='Password' 
                                                name='password' 
                                                className='form-control'
                                                required
                                                />
                                                {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                                    </div>

                                    <div className="form-group">
                                        <input type='password' 
                                                onChange={this.handleChangeRePassword} 
                                                value={this.state.repassword} 
                                                placeholder='Re-Password' 
                                                name='repassword' 
                                                className='form-control'
                                                required
                                                />
                                                {errors.repassword.length > 0 && <span className='error'>{errors.repassword}</span>}
                                    </div>
                                
                                    <div className="form-group">
                                        {
                                            this.state.fullname !== '' && this.state.email !== '' && this.state.mobile !== '' && this.state.password !== '' && this.state.repassword !== '' && formValid?
                                            <input type='submit' value='Register' className='btn btn-primary'/>:
                                            <input type='submit' value='Register' className='btn btn-primary' disabled/>
                                        }
                                    </div>
                                   
                                    <div className='form-group'>
                                        <h6>
                                            Already have an account?
                                            <Link  to={'/login'} > Login Now</Link>
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

export default Register;