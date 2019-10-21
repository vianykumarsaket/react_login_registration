import React,{Component} from 'react';
import ReactFileReader from 'react-file-reader';


class Upload_csv extends Component{
    
    constructor(props){        
        super(props);
        this.state={
            formValid:false,
            errorCount: null
        }
    } 

    handleFiles = files => {        
        console.log(files[0]);       
        var reader = new FileReader();

        reader.onload = function(e) {
            var csv = reader.result;
            var lines = csv.split("\n");
            var result = [];
            var headers=lines[0].split(",");
            for(var i=1;i<lines.length;i++){
            var obj = {};
            var currentline=lines[i].split(",");
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
            }  
            //return result; //JavaScript object
            result= JSON.stringify(result); //JSON
            console.log(result);
        } 
        reader.readAsText(files[0]);
    }

    handleSubmit = e => {
        e.preventDefault();
        // this.setState({formValid: this.validateForm(this.state.errors)});
        // this.setState({errorCount: this.countErrors(this.state.errors)});
        console.log(this.state);
    }
  
    render(){
        return(
            <div className='register_page'>                 
                <div className="container">                   
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <div className="panel">
                                    <h1>UPLOAD CSV</h1>
                                </div>
                                <form onSubmit={this.handleSubmit}> 
                                    <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                                        <button className='btn'>Upload</button>
                                    </ReactFileReader>                      
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }  
}

export default Upload_csv;