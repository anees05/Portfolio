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
                            <p>Motivated and ambitious full-stack Web Developer, who approaches opportunities with strong critical thinking, innovation, and collaborative effort with previous background in Exercise Science.
                                With experience in agile software development and responsive user design, I look forward to being able to execute my skills while continuing to learn and develop new techniques that are expected for my career.  </p>
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

                            <h4>Education</h4>
                            <Education
                                date={"2019"}
                                schoolName="University of North Carolina at Charlotte"
                                schoolDescription="Full-Stack Web Developer Bootcamp Certificate"

                                date2={"2015-2018"}
                                schoolName2="University of North Carolina at Charlotte"

                                date3={"2013-2015"}
                                schoolName3="University of North Carolina at Chapel Hill"
                            />
                        </div>
                    </Cell>
                    <Cell className="resume" col={8}>
                        {/* <h2>Education</h2>
                        <Education
                            date={"2019"}
                            schoolName="University of North Carolina at Charlotte"
                            schoolDescription="Full-Stack Web Developer Bootcamp Certificate"

                            date2={"2015-2018"}
                            schoolName2="University of North Carolina at Charlotte"

                            date3={"2013-2015"}
                            schoolName3="University of North Carolina at Chapel Hill"
                        />
                        <hr style={{ borderTop: "3px solid #45a247" }} /> */}

                        <h2>Experience</h2>
                        <Experience
                            startYear={2017}
                            endYear={2019}
                            jobName={"North Face Stock Manager"}
                            jobDescription={"•  Assists management with transfers, promotions, and unification of work to ensure their accuracy for a store of 40 employees."}
                            jobDescription2={"•	Designates tasks, reviews work, and provides detailed direction to coworkers guaranteeing that standard work processes and timelines."}
                            jobDescription3={"•	Assists management with loss prevention efforts, while providing proactive customer service."}
                            jobDescription4={"•	Engages in quality improvement efforts to improve efficiency of product delivery, customer service, etc."}
                            jobDescription5={"•	Ensures the AS400 system is accurate to support management team with inventory."}
                            jobDescription6={"•	Ensures that store operations are correct and provides detailed information for company audits. "}
                        />
                        <hr style={{ borderTop: "3px solid #45a247" }} />
                        <h2>Projects</h2>
                        <Bootcamp
                            year={2019}
                            projectName={"RoadTripDJ | Full-Stack Developer"}
                            details={"RoadTripDJ creates a Spotify playlist for your road trip, identifying musicians from the cities you are traveling to and from. Discover new music, find local artists, and keep your long drives interesting with RTDJ."}
                            responsibilities={"Built Passport authenitication for user login within the app and stored user information in a Mongo database. Created responsive react components and styled components for quality user experience."}
                            tools={"React | Express | Node | Mongo | Mongoose | Passport | Axios | Google Maps API | Spotify API | WikiJS NPM"}

                            projectName2={"Event Hunters | Full-Stack Developer"}
                            details2={"Event Hunters is an event styled app that allows users to search fro upcoming events in their area and is designed to help make quick and easy decisions for finding the right pastime."}
                            responsibilities2={"Integrated Weather API and worked heavily on front-end UX/UI."}
                            tools2={"Google Maps API | OpenWeather API | Lodash | HTML | SASS | MomentJS | Bootstrap"}

                            projectName3={"Bamazon | Back-End Developer"}
                            details3={"Bamazon is an Amazon style app that tracks products in a MySQL database in response to Node commands. It allows users to acts as a customer who can buy products from a list, which updates the spreadsheet accordingly."}
                            tools3={"Node | MySQL | Inquirer"}

                            projectName4={"Giphy | Full-Stack Developer"}
                            details4={"Giphy is an application that allows users to watch gifs about different sports teams. The user is able to pick favorite gifs to save for later as well as add their own gif buttons."}
                            tools4={"HTML | CSS | jQuery"}

                            projectName5={"Liri | Back-End Developer"}
                            details5={"The Liri app makes it extremely easy to search the included APIs for information, simply by using the terminal. It currently includes Bands in Town (for upcoming concerts), Spotify (for song information), and OMDB (for movie information)."}
                            tools5={"Node"}

                            projectName6={"Friend Finder | Full-Stack Developer"}
                            details6={"Friend Finder is an application that best matches you with your superhero friend. The user takes a short survey and based on their answers they will see their superhero."}
                            tools6={"HTML | CSS | Express "}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;