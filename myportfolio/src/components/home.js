import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Image from "./IMG_3650.png"

class Home extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src={Image}
                            alt="Anees Adams"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;