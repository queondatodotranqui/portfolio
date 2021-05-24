import React from 'react';
import TextTransition, {presets} from 'react-text-transition';

import '../styles/Main.css';

const TEXTS = [
    'Hello!',
    'Hi!',
    'Hola!',
    'Hey!'
];

const Main = ()=>{

    const [index, setIndex] = React.useState(0);

    React.useEffect(()=>{
        const intervalId = setInterval(() => {
          setIndex(index => index + 1)  
        }, 3000);

        return () => clearTimeout(intervalId);
    }, []);

    return(
        <div className="intro">
            <div style={{width:'50%'}}>
                <h1><TextTransition 
                    text={ TEXTS[index % TEXTS.length]}
                    springConfig={ presets.gentle}
                    className='movingText'
                /></h1>
            </div>
            <div>
                <h3>I'm Nicolas Vera</h3>
                <h5>A Node.js Developer</h5>
            </div>
        </div>
    )
}

export default Main;