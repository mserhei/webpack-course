import {useState} from "react";

import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import ImagePng from '@/assets/image.png';
import ImageJpg from '@/assets/image.jpg';
import ImageSvg from '@/assets/image.svg';
import { error } from "console";

const TODO = () => {
    throw new Error;
}
 
const App = () => {

    TODO();

    const [count, setCount] = useState(0);

    const counter = () => {
        setCount(prev => prev + 1);
    }

    // if (__PLATFORM__ === 'mobile') {
    //     return <div>ismobile</div>
    // }

    // if (__PLATFORM__ === 'desktop') {
    //     return <div>isdesktop</div>
    // }

    // TODO(50)

    return ( 
        <>
        <div data-testid={'App.Data'}>{__PLATFORM__}</div>
        <img width={'100'} height={'auto'} src={ImagePng}></img>
        <img width={'100'} height={'auto'} src={ImageJpg}></img>
        <ImageSvg color="green" width='100' height='100'/>
        <Link to="/">home</Link>
        <br/>
        <Link to="/about">aboutd</Link>
        <br/>
        <Link to="/shop">shop</Link>
        <br/>
        <div>hello worldasdf</div>
        
        <p>counter: {count}</p>
        <button className={classes.button} onClick={counter}><span>Прибавить</span></button>
        <Outlet/>
        </>
        
        
     );
}
 
export default App;