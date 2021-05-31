import React, { Component } from 'react'
import { MultimediaList } from './MultimediaList';

export class ImageScreen extends Component {
    render() {
        const { urlValue, titleValue, earth_date, sol, full_name, description } = this.props.location.state;
        return (
        <div className="row mt-5">
            <div className="col-4">
                { !Array.isArray(urlValue)
                    ?   [
                            <img src={urlValue} alt={titleValue} className="card-img"/>
                        ]
                    :   urlValue.map( img => (
                            <MultimediaList 
                                    key={ img.id }
                                    { ...img }
                                />
                        ))
                }
            </div>
            
            <div className="col-8 animate__animated animate__fadeIn">
                <h3 style={{"margin-left": "20%"}}> { titleValue } </h3>
                <br></br><br></br>
                
                <h4 style={{"margin-left": "20%"}}> { description } </h4>
                <br></br>

                <div className="d-flex align-items-stretch">   
                    
                    <img src="https://image.flaticon.com/icons/png/512/3076/3076753.png" alt="earth_date" style={{"margin-left": "20%"}} width="30" height="30"/>
                
                    <h6 style={{"margin-left": "3%"}}>{ earth_date }</h6> 
                
                    <img src="https://image.flaticon.com/icons/png/512/4560/4560606.png" alt="sol" width="30" style={{"margin-left": "5%"}} height="30"/> 
                
                    <h6 style={{"margin-left": "3%"}}>{ sol }</h6>

                    <h6 style={{"margin-left": "8%"}}><b>Full Name</b>: { full_name }</h6>
                                        
                </div> 
                <br></br><br></br>
                <div className="row">
                    <div className="col-8 pull-right" style={{"margin-left": "20%"}}>

                        <button 
                            className="btn btn-outline-info  d-flex align-items-end"
                            onClick={ () => this.props.history.goBack() }
                        >
                            Return
                        </button>
                    </div>
                </div>

                
            </div>

        </div>
        );
    }
  }
  
 