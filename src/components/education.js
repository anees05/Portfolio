import React, { Component } from "react"
import { Grid, Cell } from "react-mdl";

class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.date}</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>{this.props.date2}</p>
                    <br />
                    <p>{this.props.date3}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                    <br />
                    <h4 style={{ marginTop: "0px" }}>{this.props.schoolName2}</h4>
                    <br />
                    <h4 style={{ marginTop: "0px" }}>{this.props.schoolName3}</h4>
                </Cell>
            </Grid>
        )
    }
}

export default Education;