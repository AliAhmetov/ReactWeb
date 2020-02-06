import React, { Component } from "react";

class MovieDetails extends Component {

    render () {
        return (
        <React.Fragment>
            { this.props.movie ? (
                <h3>{this.props.movie.title}</h3>
            ) : null }
        </React.Fragment>
        )
    }
}

export default MovieDetails;