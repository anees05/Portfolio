import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

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
                            date={"June 2019 - September 2019"}
                            schoolName="University of North Carolina at Charlotte"
                            schoolDescription="Full Stack Web Developer Bootcamp"
                        />
                        <hr style={{ borderTop: "3px solid #283c86" }} />

                        <h2>Experience</h2>
                        <Experience
                            startYear={2017}
                            endYear={2019}
                            jobName={"North Face Stock Manager"}
                            jobDescription={"•  Assists management with transfers, promotions, and unification of work to insure their accuracy"}
                            jobDescription2={"•	Designate tasks, review work, and provide detailed direction to coworkers guaranteeing that processes are met in established timelines."}
                            jobDescription3={"•	Assist management with loss prevention efforts, while providing proactive customer service."}
                            jobDescription4={"•	Professionally identifies areas of improvement and establish innovative work procedures."}
                            jobDescription5={"•	Ensure proper systems are accurate to support management team with inventory."}
                            jobDescription6={"•	Assist with inventory preparations and practices."}
                            jobDescription7={"•	Ensure that store operations are correct and provide detailed information for company audits. "}
                        />

                        <Experience
                            startYear={2015}
                            endYear={2016}
                            jobName={"Nike Outlet Footwear Associate"}
                            jobDescription={"•  Welcomed guests as they entered the store and engage in conversation to determine their shoe buying needs."}
                            jobDescription2={"•	Provided guests with information on available styles, sizes, and colors."}
                            jobDescription3={"•	Assist guests with trying on shoes while providing useful feedback."}
                            jobDescription4={"•	Made sure the shoe department was kept clean and organized."}
                            jobDescription5={"•	Ran guests through the payment procedure by processing card and cash transactions."}
                            jobDescription6={"•	Worked with co-workers and supervisors to accomplish goals."}
                        />
                        <hr style={{ borderTop: "3px solid #283c86" }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Javascript"
                            progress={77}
                        />
                        <Skills
                            skill="JQuery"
                            progress={72}
                        />
                        <Skills
                            skill="React"
                            progress={63}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={78}
                        />
                        <Skills
                            skill="Handlebars"
                            progress={69}
                        />
                        <Skills
                            skill="Express"
                            progress={82}
                        />
                        <Skills
                            skill="HTML"
                            progress={87}
                        />
                        <Skills
                            skill="CSS"
                            progress={73}
                        />
                        <Skills
                            skill="Passport"
                            progress={55}
                        />
                        <Skills
                            skill="MySQL"
                            progress={67}
                        />
                        <Skills
                            skill="Sequelize"
                            progress={67}
                        />
                        <Skills
                            skill="MongoDB"
                            progress={81}
                        />
                        <Skills
                            skill="Mongoose"
                            progress={81}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;