import React, {Component} from "react";
import "./style.css";

class Profile extends Component{
    render(){
        const profile={
            margin: "0px 15px"
        }

        const image={
            width: "300px",
            height:"400px",
            margin: "20px 0px",
            borderRadius: "10px"
        }

        const name={
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            textAlign: "left",
            fontSize: "30px"
        }

        const position={
            fontFamily: "Georgia, 'Times New Roman', Times, sans-serif",
            textAlign: "left",
            fontSize: "20px",
            color: "#656565",
            fontVariantCaps: "all-small-caps"
        }
        const male={
            border:"blue 3px solid"
        }

        const female={
            border:"yellow 3px solid"
        }
        if(this.props.gender==="male"){
            return(
                <div style={profile}>
                    <img src={this.props.url} alt="yolo" style={{...image,...male}}/> 
                    <h2 style={name}>{this.props.firstName} {this.props.lastName}</h2> 
                    <h3 style={position}>{this.props.position}</h3>
                </div>
            );
           
        } else{
            return(
                <div style={profile}>
                    <img src={this.props.url} alt="yolo" style={{...image,...female}}/> 
                    <h2 style={name}>{this.props.firstName} {this.props.lastName}</h2> 
                    <h3 style={position}>{this.props.position}</h3>
                </div>
            );    
        }
    }
}

export default Profile;