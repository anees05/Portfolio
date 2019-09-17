import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education"

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div>
                            <h2>Anees Adams</h2>
                            <h4 style={{ color: "grey" }}> Full Stack Web Developer</h4>
                            <hr style={{ borderTop: "3px solid #283c86", width: "50%" }} />
                            <p>I am a front-end web developer with a background in exercise science.
                                I earned a certificate in Full Stack Web Development from University of North Carolina at Charlotte.
                                I use HTML5, CSS3, JavaScript, jQuery, Node.js, MySQL, Sequelize, MongoDB, Mongoose, and Git.
                                I love UX-Design, logical thinking, and work well with people.</p>
                            <hr style={{ borderTop: "3px solid #283c86", width: "50%" }} />
                            <h5>Address</h5>
                            <p>9700 Commons East Drive Charlotte, NC</p>
                            <h5>Phone</h5>
                            <p>(919) 455-0338</p>
                            <h5>Email</h5>
                            <p>anees.adams05@gmail.com</p>
                            <h5>Website</h5>
                            <p>aneesadams.dev</p>
                            <hr style={{ borderTop: "3px solid #283c86", width: "50%" }} />
                        </div>
                    </Cell>
                    <Cell className="resume" col={8}>
                        <h2>Education</h2>
                        <Education
                            year={2019}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;