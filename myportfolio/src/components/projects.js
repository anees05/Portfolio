import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

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
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}>React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum
                        </CardText>
                    <CardActions border>
                        <Button colored style={{width: "100%"}}>Github</Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}>React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum
                        </CardText>
                    <CardActions border>
                        <Button colored style={{width: "100%"}}>Github</Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
                </Card>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
                </Card>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
                </Card>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
                </Card>
            )
        } else if (this.state.activeTab === 5) {
            return (
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
                </Card>
            )
        } else if (this.state.activeTab === 6) {
            return (
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
                </Card>
            )
        } else if (this.state.activeTab === 7) {
            return (
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url() center / cover" }}></CardTitle>
                </Card>
            )
        }
    }

    render() {
        return (
            <div className="category">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Jquery</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>MySQL</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>HandleBars</Tab>
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