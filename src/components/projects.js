import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <Button colored style={{ width: "100%", height: "100%" }}>
                            <a href="https://anees05.github.io/Project-1/" rel="noopener noreferrer" target="blank">
                                <CardTitle style={{ color: "black", height: "176px", background: "url(https://snipboard.io/1TFmaG.jpg) center / cover" }}>Project #1
                            </CardTitle>
                            </a>
                        </Button>
                        <CardText>
                            Event Hunters is an event styled app that allows users to search for upcoming events in their area and is designed to help make quick and easy decisions for finding the right pastime.                        </CardText>
                        <CardActions border>
                            <Button colored style={{ width: "100%" }}><a href="https://github.com/anees05/Project-1" rel="noopener noreferrer" target="blank">Github</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <Button colored style={{ width: "100%", height: "100%" }}>
                            <a href="https://jobs-r-us.herokuapp.com/" rel="noopener noreferrer" target="blank">
                                <CardTitle style={{ color: "black", height: "176px", background: "url(https://snipboard.io/IFKXGx.jpg) center / cover" }}>Project #2
                            </CardTitle>
                            </a>
                        </Button>
                        <CardText>
                            Jobs-R-Us is a web app that allows users to make searches for job information.
                        </CardText>
                        <CardActions border>
                            <Button colored style={{ width: "100%" }}><a href="https://github.com/anees05/JobStuff2" rel="noopener noreferrer" target="blank">Github</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <Button colored style={{ width: "100%", height: "100%" }}>
                            <a href="https://glacial-savannah-65289.herokuapp.com/" rel="noopener noreferrer" target="blank">
                                <CardTitle style={{ color: "black", height: "176px", background: "url(https://snipboard.io/kauSd3.jpg) center / cover" }}>Project #3
                            </CardTitle>
                            </a>
                        </Button>
                        <CardText>
                            RoadTripDJ creates a Spotify playlist for your road trip with musicians from the cities you’re traveling to and from. Discover new music, find local artists, and keep your long drives interesting with RoadTripDJ.
                        </CardText>
                        <CardActions border>
                            <Button colored style={{ width: "100%" }}><a href="https://github.com/Tim1986/RoadTripDJ" rel="noopener noreferrer" target="blank">Github</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                        </CardMenu>
                    </Card>


                </div>
            )
            // } else if (this.state.activeTab === 1) {
            //     return (
            //         <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            //             <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
            //         </Card>
            //     )
            // } else if (this.state.activeTab === 2) {
            //     return (
            //         <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            //             <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
            //         </Card>
            //     )
            // } else if (this.state.activeTab === 3) {
            //     return (
            //         <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            //             <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
            //         </Card>
            //     )
            // } else if (this.state.activeTab === 4) {
            //     return (
            //         <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            //             <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
            //         </Card>
            //     )
            // } else if (this.state.activeTab === 5) {
            //     return (
            //         <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            //             <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
            //         </Card>
            //     )
            // } else if (this.state.activeTab === 6) {
            //     return (
            //         <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            //             <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
            //         </Card>
            //     )
            // } else if (this.state.activeTab === 7) {
            //     return (
            //         <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            //             <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
            //         </Card>
            //     )
        }
    }

    render() {
        return (
            <div className="category">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    {/* <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Jquery</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>MySQL</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>HandleBars</Tab> */}
                    <Tab>Projects</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;