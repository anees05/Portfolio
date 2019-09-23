import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Bootcamp from "./bootcamp-projects";

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div>
                            <h2>Anees Adams</h2>
                            <h4 style={{ color: "grey" }}> Full-Stack Web Developer</h4>
                            <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />
                            <p>A motivated, ambitious person who has developed a mature and responsible approach to any task that I undertake, or situations that I am presented with.
                                I am a full-stack Web Developer with a background in Exercise Science.
                                I eared a certificate in Full-Stack Web Development from the University of North Carolina at Charlotte.
                                I used HTML5, CSS3, JavaScript, jQuery, Node.js, MySQL, Sequelize, MogoDB, Mongoose, and Git.
                                I enjoy UX-Design, logical thinking, and working professionally within a team.
                                I look forward to being able to execute my skills while continuing to learn and develop new techniques that are expected for my career. </p>
                            <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />
                            <h5>Location</h5>
                            <p>Charlotte, NC</p>
                            <h5>Phone</h5>
                            <p>(919) 455-0338</p>
                            <h5>Email</h5>
                            <p>anees.adams05@gmail.com</p>
                            <h5>Website</h5>
                            <p>aneesadams.com</p>
                            <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />

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
                        </div>
                    </Cell>
                    <Cell className="resume" col={8}>
                        <h2>Education</h2>
                        <Education
                            date={"2019"}
                            schoolName="University of North Carolina at Charlotte"
                            schoolDescription="Full-Stack Web Developer Bootcamp Certificate"

                            date2={"2015-2018"}
                            schoolName2="University of North Carolina at Charlotte"

                            date3={"2013-2015"}
                            schoolName3="University of North Carolina at Chapel Hill"
                        />
                        <hr style={{ borderTop: "3px solid #45a247" }} />

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
                        <hr style={{ borderTop: "3px solid #45a247" }} />
                        <h2>Projects</h2>
                        <Bootcamp
                            year={2019}
                            projectName={"RoadTripDJ | Full-Stack Developer"}
                            coreResponsibilities={"RoadTripDJ creates a Spotify playlist for your road trip with musicians from the cities you are traveling to and from. Discover new music, find local artists, and keep your long drives interesting with RTDJ."}
                            tools={"React | Express | Node | Mongo | Mongoose | Passport | Axios | Google Maps API | Spotify API | WikiJS NPM"}


                            projectName2={"Event Hunters | Full-Stack Developer"}
                            coreResponsibilities2={"Event Hunters is an event styled app that allows users to search fro upcoming events in their area and is designed to help make quick and easy decisions for finding the right pastime."}
                            tools2={"Google Maps API | OpenWeather API | Lodash | HTML | SASS | MomentJS | Bootstrap"}

                            projectName3={"Bamazon | Back-End Developer"}
                            coreResponsibilities3={"Bamazon is an Amazon style app that tracks products in a MySQL database in response to Node commands. It allows users to acts as a customer who can buy products from a list, which updates the spreadsheet accordingly."}
                            tools3={"Node | MySQL | Inquirer"}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;