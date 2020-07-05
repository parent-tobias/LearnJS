import React, {Component} from "react";
import TeamMember from "./TeamMember";

import team1 from "../assets/img/team/1.jpg";
import team2 from "../assets/img/team/2.jpg";
import team3 from "../assets/img/team/3.jpg";

const members = [
    {name: "Kay Garland", role: "Lead Designer", image: team1},
    {name: "Larry Parker", role: "Lead Marketer", image: team2},
    {name: "Diana Pertersen", role: "Lead Developer", image: team3}
]

class Team extends Component {
    render(){
        return (
            <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    
                    {members.map((member, i) => {
                        return <TeamMember {...member} key={i} />
                    })}                    
                    
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        )
    }
}

export default Team;