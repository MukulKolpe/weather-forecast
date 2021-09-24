import React, {Component} from "react";
//import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class Form extends Component{
	render(){
		return(
			
			<form onSubmit = {this.props.getWeather}>
				<div className="form-inline justify-content-center pl-3 pr-3">
				<TextField id="outlined-basic" name="country" label="country" variant="outlined" color="success" placeholder="Country..." sx={{
        '& > :not(style)': { m: 1 },
      }}/>
				
				<TextField id="outlined-basic" name="city" label="city" variant="outlined" color="success" placeholder="City..." sx={{
        '& > :not(style)': { m: 1 },
      }}/>
				{/*<input type="text" name="country" className="form-control mr-3 mb-3" placeholder="Country..."/>
                <input type="text" name="city" className="form-control mr-3 mb-3" placeholder="City..."/>*/}
                                                
				</div>
				<div className="row justify-content-center">
						<button type="submit" className="btn btn-dark info mb-3">Get Weather <i className="fas fa-arrow-alt-circle-right ml-1"></i></button>
					 {/* <Button type="submit" variant="contained">Get Weather<i className="fas fa-arrow-alt-circle-right ml-1"></i></Button>	*/}
				</div>	
					
			</form>
			
		);
	}
};

export default Form;