import React, { Component } from "react";

class Weather extends Component{
	render(){
		return(
			<div className="container pt-2 mt-3 col-lg-8 mx-auto text-center">
                {this.props.city && this.props.country &&
                    <h4>Present Conditions</h4>
                }
				<table className="table pb-3 mb-2">
  
				  <tbody>
				    {this.props.city && this.props.country &&
                    
				    <tr>
				      
				      <td className="text-right mx-auto"><b>Location:</b></td>
				      <td className="text-left mx-auto">{ this.props.city}, { this.props.country}</td>
				      
				    </tr>
				    }
				    
				    { this.props.temperature && 						
				    <tr>
				      
				      <td className="text-right"><b>Temperature:</b></td>
				      <td className="text-left">{ this.props.temperature}&#8451;</td>
				      
				    </tr>
				    }

				    { this.props.humidity && 						
				    <tr>
				      
				      <td className="text-right"><b>Humidity:</b></td>
				      <td className="text-left">{ this.props.humidity} %</td>
				      
				    </tr>
				    }	

				    { this.props.description && 						
				    <tr className="mb-5">
				      
				      <td className="text-right"><span className="text-bold">Conditions:</span></td>
				      <td className="text-left">{ this.props.description}</td>
				  
				    </tr>
								
				    }	
					

				    {/* { this.props.error && 						
				    <tr>
				      
				      
				      <td className="text-center">{ this.props.error}</td>
				      
				    </tr>
				    }		 */}

						
				    
				  </tbody>
				</table>
				{this.props.city && this.props.country &&
                   <div className="container text-center">
                        <button className="btn btn-light" onClick={this.props.getForecast}>Forecast<i className="fas fa-cloud-sun-rain ml-1"></i></button>
                   </div>
                }
			</div>
		);
	}
};

export default Weather;