import { useNavigate } from 'react-router-dom';

import classes from "./Homepage.module.css";
import QuizIcon from "../images/QuizIcon";

const Homepage = () => {
    const navigate = useNavigate();
    
    
    return (
        <section className={classes.section}>
            <div className={classes.image}><QuizIcon  /> </div>
            <div className={classes.text}>
                <div><p className={classes.welcome}>Welcome to the Trivia Challenge</p></div>
                <div><p className={classes.text_div_p}>You will be presented with 10 True or False questions</p></div>
                <div><p className={classes.text_div_p}>Can you score 100%?</p></div>
                <div><button onClick={()=>navigate('/quiz')}>BEGIN</button></div>
            </div>
        </section>
    )
}

export default Homepage;