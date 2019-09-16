import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    render() {
        return (
            <div className="category">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Jquery</Tab>
                    <Tab>MySQL</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>HandleBars</Tab>
                    <Tab>Projects</Tab>
                </Tabs>

                <section className="projects-grid">
                {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;