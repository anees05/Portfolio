import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
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
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>Lorem Ipsum</p>
                    </Cell>
                    <Cell col={6}>
                        
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;