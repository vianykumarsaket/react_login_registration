function handleChange(e){
    console.log(e.target.value);
    this.setState({
        [e.target.name] : e.target.value
    });   
    
    // console.log(this.state.password === repassword.target.value);
}

function handleChangeRePassword(e){
    this.handleChange(e);
    console.log(this.state.password === e.target.value);
    if(this.state.password === e.target.value){

    }
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
}

export default {handleChange,handleChangeRePassword,handleSubmit};