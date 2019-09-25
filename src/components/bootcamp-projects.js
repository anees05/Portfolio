import React, { Component } from "react"
import { Grid, Cell } from "react-mdl";

class Bootcamp extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.year}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: "0px" }}>{this.props.projectName}</h4>
                    <p>{this.props.details}
                        <br />
                        <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />
                        {this.props.responsibilities}
                        <br />
                        <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />
                        {this.props.tools}
                    </p>

                    <br />
                    <h4 style={{ marginTop: "0px" }}>{this.props.projectName2}</h4>
                    <p>{this.props.details2}
                        <br />
                        <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />
                        {this.props.responsibilities2}
                        <br />
                        <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />
                        {this.props.tools2}
                    </p>

                    <br />
                    <h4 style={{ marginTop: "0px" }}>{this.props.projectName3}</h4>
                    <p>{this.props.details3}
                        <br />
                        <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />
                        {this.props.tools3}
                    </p>
                </Cell>
            </Grid>
        )
    }
}




export default Bootcamp;