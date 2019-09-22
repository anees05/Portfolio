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
                            I am a front-end web developer with a background in exercise science.
                            I earned a certificate in Full Stack Web Development from University of North Carolina at Charlotte.
                            I use HTML5, CSS3, JavaScript, jQuery, Node.js, MySQL, Sequelize, MongoDB, Mongoose, and Git.
                            I love UX-Design, logical thinking, and work well with people.
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