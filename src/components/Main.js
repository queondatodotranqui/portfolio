import React from 'react';
import { init } from 'ityped'
import '../styles/Main.css';


class Main extends React.Component{

    constructor(){
        super()

        this.state = {
            texts: ['Node.js developer', 'React enjoyer', 'Code enthusiast']
        }
    }

    componentDidMount(){
        const target = document.getElementById('target')
        init(target, {
            strings: this.state.texts,
            typeSpeed: 120,
            backSpeed:70,
            showCursor:false,
            backDelay: 1200
        })
    }

    render(){
        return(
            <div className="intro">
                <div>
                    <h2 className="target" style={{top:295, fontSize:'2em'}}>Hello! I'm Nicolas Vera</h2>
                    <p id="target" style={{fontWeight:'lighter'}} className="target"></p>
                </div>
            </div>
        )
    }
}

export default Main;