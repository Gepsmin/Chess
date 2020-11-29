import React, {Component} from 'react'
import Block from './Block'
import Piece from './Piece'
import w_piyon from '../images/piyon_white.png'
import b_piyon from '../images/piyon.png'
import w_at from '../images/at_white.png'
import b_at from '../images/at_black.png'
import w_fil from '../images/fil_white.png'
import b_fil from '../images/fil_black.png'
import w_kale from '../images/kale_white.png'
import b_kale from '../images/kale_black.png'
import w_sah from '../images/sah_white.png'
import b_sah from '../images/sah_black.png'
import w_vezir from '../images/vezir_white.png'
import b_vezir from '../images/vezir_black.png'
import nl from '../images/null.png'



class Home extends Component{
    
    constructor(){
        super();
        
        this.state = {
            table : [
                "b", "w","b", "w","b", "w","b", "w",
                "w","b", "w","b", "w","b", "w","b",
                "b", "w","b", "w","b", "w","b", "w",
                "w","b", "w","b", "w","b", "w","b",
                "b", "w","b", "w","b", "w","b", "w",
                "w","b", "w","b", "w","b", "w","b",
                "b", "w","b", "w","b", "w","b", "w",
                "w","b", "w","b", "w","b", "w","b"
            ],
            contents : [
                "w_kale","w_at","w_fil","w_vezir","w_sah","w_fil","w_at","w_kale",
                "w_piyon", "w_piyon", "w_piyon", "w_piyon", "w_piyon", "w_piyon", "w_piyon", "w_piyon", 
                "null","null","null","null","null","null","null","null",
                "null","null","null","null","null","null","null","null",
                "null","null","null","null","null","null","null","null",
                "null","null","null","null","null","null","null","null",
                "b_piyon","b_piyon","b_piyon","b_piyon","b_piyon","b_piyon","b_piyon","b_piyon",
                "b_kale","b_at","b_fil","b_vezir","b_sah","b_fil","b_at","b_kale"
            ]

        }
    }

    createTable(){
    }

    render(){
        return(
            <div className="HomePage">
                <div className="Table">
                    {this.state.table.map((color)=>{
                        return <Block col={color}/>
                    })}
                </div>
                <div className="Pieces">
                    {this.state.contents.map((value)=>{
                        if(value==="null"){
                            return <Piece src={nl}></Piece>
                        }
                        else if(value==="w_piyon"){
                            return <Piece src={w_piyon}/>
                        }
                        else if(value==="b_piyon"){
                            return <Piece src={b_piyon}/>
                        }
                        else if(value==="w_at"){
                            return <Piece src={w_at}/>
                        }
                        else if(value==="b_at"){
                            return <Piece src={b_at}/>
                        }
                        else if(value==="w_fil"){
                            return <Piece src={w_fil}/>
                        }
                        else if(value==="b_fil"){
                            return <Piece src={b_fil}/>
                        }
                        else if(value==="w_kale"){
                            return <Piece src={w_kale}/>
                        }
                        else if(value==="b_kale"){
                            return <Piece src={b_kale}/>
                        }
                        else if(value==="w_sah"){
                            return <Piece src={w_sah}/>
                        }
                        else if(value==="b_sah"){
                            return <Piece src={b_sah}/>
                        }
                        else if(value==="w_vezir"){
                            return <Piece src={w_vezir}/>
                        }
                        else if(value==="b_vezir"){
                            return <Piece src={b_vezir}/>
                        }

                    })}
                </div>
            </div>
        )
    }
}

export default Home