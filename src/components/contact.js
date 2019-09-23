import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Image from "./IMG_3650.png"


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Anees Adams</h2>
                        <img
                            src={Image}
                            alt="anees"
                            style={{ height: "250px" }}
                        />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                            A motivated, ambitious person who has developed a mature and responsible approach to any task that I undertake, or situations that I am presented with. I am a full-stack Web Developer with a background in Exercise Science. I earned a certificate in Full-Stack Web Development from the University of North Carolina at Charlotte. I used HTML5, CSS3, JavaScript, jQuery, Node.js, MySQL, Sequelize, MogoDB, Mongoose, and Git. I enjoy UX-Design, logical thinking, and working professionally within a team. I look forward to being able to execute my skills while continuing to learn and develop new techniques that are expected for my career.
                            </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Info</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (919) 455-0338
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        anees.adams05@gmail.com
                                        </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;