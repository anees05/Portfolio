import React, { Component } from "react"
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: "0px" }}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}
                        <br />
                        {this.props.jobDescription2}
                        <br />
                        {this.props.jobDescription3}
                        <br />
                        {this.props.jobDescription4}
                        <br />
                        {this.props.jobDescription5}
                        <br />
                        {this.props.jobDescription6}
                        <br />
                        {this.props.jobDescription7}
                    </p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;