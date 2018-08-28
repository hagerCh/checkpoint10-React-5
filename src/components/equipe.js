import React, {Component} from 'react';
import Profile from "./profile";
import "./style.css";

class Equipe extends Component { 
    render() {
        const h1={
            margin: "20px", 
            marginTop: "0px",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            fontWeight: "bold",
            color: "#2E2E2E"
        }

        const equipe={
            padding: "25px",
        }
        return ( 
            <div> 
                <h1 style={h1}>
                    Notre équipe
                </h1>
                <div className="row" style={equipe}>
                    <Profile gender = "male" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAZye2PSYjJZN5p4MpdV0F5Oazkeo728FY0RVzC5UCCAx8RKV" firstName="Samir" lastName="Ben Salah" position="Student" />
                    <Profile gender = "female" url="https://i.pinimg.com/736x/ca/08/dd/ca08dda8412aee3c8db44e44b90d9a35--woman-portrait-female-portrait.jpg" firstName="Hager" lastName="Chaabane" position="Professor" />
                    <Profile gender = "male" url="http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg" firstName="Ahmed" lastName="Hedi" position="Student"/>
                    <Profile gender = "male" url="http://markseliger.com/wp-content/gallery/portraits/2011-063A_A2.jpg" firstName="Salah" lastName="Mohamed" position="Principal" />
                </div>
			</div>
         );
    }
}
export default Equipe;