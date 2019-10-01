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

                    <h4 style={{ marginTop: "0px" }}>{this.props.projectName4}</h4>
                    <p>{this.props.details4}
                        <br />
                        <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />
                        {this.props.tools4}
                    </p>

                    <h4 style={{ marginTop: "0px" }}>{this.props.projectName5}</h4>
                    <p>{this.props.details5}
                        <br />
                        <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />
                        {this.props.tools5}
                    </p>

                    <h4 style={{ marginTop: "0px" }}>{this.props.projectName6}</h4>
                    <p>{this.props.details6}
                        <br />
                        <hr style={{ borderTop: "3px solid #45a247", width: "50%" }} />
                        {this.props.tools6}
                    </p>
                </Cell>
            </Grid>
        )
    }
}




export default Bootcamp;