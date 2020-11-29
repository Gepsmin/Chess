import React, {Component} from 'react'

class Piece extends Component{
    render(){
        const image = this.props.src
        return(
                <img src={image}></img>
        )
    }
}

export default Piece