import React, {Component} from 'react'
import black from "../images/brown.png"
import white from "../images/white.png"

class Block extends Component{
    render(){
        const color = this.props.col ;
        return(
            <div className="BlockPage">
                {color === "b" ? <img src={black}></img>: <img src={white}></img>}
            </div>
        )
    }
}

export default Block