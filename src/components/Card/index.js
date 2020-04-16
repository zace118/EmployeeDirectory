import React, { Component } from 'react';
import Icon from '../../icon1.png'

class Card extends Component {
    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "center" }}>{this.props.name}</h5>
                    <img src={Icon} className="card-img-top" alt="img" />
                    <p className="card-text" style={{ textAlign: "center" }}>{this.props.role}</p>
                    <p className="card-text" style={{ textAlign: "center" }}>{this.props.department}</p>
                </div>
            </div>
        )
    }
}

export default Card;