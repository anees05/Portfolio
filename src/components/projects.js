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
                    <Grid>
                        <Cell col={6}>
                            <Card shadow={5} style={{ minWidth: "450", margin: "auto", }} className="project-1">
                                <Button colored style={{ width: "100%", height: "100%" }}>
                                    <a href="https://anees05.github.io/Project-1/" rel="noopener noreferrer" target="blank">
                                        <CardTitle style={{ color: "#bdc3c7", height: "176px", background: "url(https://snipboard.io/1TFmaG.jpg) center / cover" }}>Event Hunters
                            </CardTitle>
                                    </a>
                                </Button>
                                <CardText>
                                    Event Hunters is an event styled app that allows users to search for upcoming events in their area and is designed to help make quick and easy decisions for finding the right pastime.
                                    </CardText>
                                <CardActions border>
                                    <Button colored style={{ width: "100%" }}><a href="https://github.com/anees05/Project-1" rel="noopener noreferrer" target="blank">Github</a></Button>
                                </CardActions>
                                <CardMenu style={{ color: "#fff" }}>
                                </CardMenu>
                            </Card>

                            <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginTop: "30px" }} className="project-1">
                                <Button colored style={{ width: "100%", height: "100%" }}>
                                    <a href="https://anees05.github.io/liri-node-app/" rel="noopener noreferrer" target="blank">
                                        <CardTitle style={{ color: "#bdc3c7", height: "176px", background: "url(https://snipboard.io/R4wYgl.jpg) center / cover" }}>Liri
                            </CardTitle>
                                    </a>
                                </Button>
                                <CardText>
                                    The Liri app makes it extremely easy to search the included APIs for information, simply by using the terminal. It currently includes Bands in Town (for upcoming concerts), Spotify (for song information), and OMDB (for movie information).                                    </CardText>
                                <CardActions border>
                                    <Button colored style={{ width: "100%" }}><a href="https://github.com/anees05/liri-node-app" rel="noopener noreferrer" target="blank">Github</a></Button>
                                </CardActions>
                                <CardMenu style={{ color: "#fff" }}>
                                </CardMenu>
                            </Card>
                        </Cell>
                    </Grid>


                    <Grid>
                        <Cell col={6}>
                            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="project-2">
                                <Button colored style={{ width: "100%", height: "100%" }}>
                                    <a href="https://anees05.github.io/bamazonCustomer/" rel="noopener noreferrer" target="blank">
                                        <CardTitle style={{ color: "#bdc3c7", height: "176px", background: "url(https://snipboard.io/um3a6d.jpg) center / cover" }}>Bamazon
                            </CardTitle>
                                    </a>
                                </Button>
                                <CardText>
                                    Bamazon is an Amazon style app that tracks products in a MySQL database in response to Node commands. It allows users to acts as a customer who can buy products from a list, which updates the spreadsheet accordingly.                        </CardText>
                                <CardActions border>
                                    <Button colored style={{ width: "100%" }}><a href="https://github.com/anees05/bamazonCustomer" rel="noopener noreferrer" target="blank">Github</a></Button>
                                </CardActions>
                                <CardMenu style={{ color: "#fff" }}>
                                </CardMenu>
                            </Card>


                            <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginTop: "30px" }} className="project-3">
                                <Button colored style={{ width: "100%", height: "100%" }}>
                                    <a href="https://glacial-savannah-65289.herokuapp.com/" rel="noopener noreferrer" target="blank">
                                        <CardTitle style={{ color: "#bdc3c7", height: "176px", background: "url(https://snipboard.io/kauSd3.jpg) center / cover" }}>RoadTripDJ
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
                        </Cell>
                    </Grid >
                </div >
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