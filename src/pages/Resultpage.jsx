import { useNavigate } from 'react-router-dom';
import classes from './Resultpage.module.css';

import Checkmark from '../icons/Checkmark';
import WrongIcon from '../icons/WrongIcon';
import RepeatIcon from '../icons/RepeatIcon';

const Resultpage = ({resultData, setResultData}) => {
    
    const navigate = useNavigate();
    const quizScore = resultData.reduce((acc, result) => 
     result.correct_answer === result.answer_picked ? acc + 1 : acc, 0)
    
    const handleReload = () => {
        window.location.reload;
        navigate('/', {replace: true});
        setResultData([])
    }

        return (
        <section className={classes.section}>
            {
                (()=> {
                    if (quizScore > 8) {
                    return <p className={classes.summary}> You Scored {quizScore}/10 🎉</p> 
                    } else if (quizScore < 8 && quizScore > 4) {
                    return <p className={classes.summary}>You Scored {quizScore} /10 💪</p> 
                    }else if (quizScore < 5) {
                    return <p className={classes.summary}>You Scored {quizScore}/10 😑</p> ;
                }
            })()
            }
            <div className={classes.report_parent}>
                {
                    resultData.map((result) => {
                        return <div key={result.index} className={` ${classes.report_child} ${result.answer_picked===result.correct_answer ? classes.correct_ans : classes.false_ans}`}>
                            <p className={classes.question_para} dangerouslySetInnerHTML={{__html: result.question}} />
                            <p className={classes.option_para}>Your Answer: {result.answer_picked} 
                            {result.answer_picked===result.correct_answer? <span className={`${classes.checkmark} ${classes.icon}`}> <Checkmark /></span> : <span className={classes.falseicon}><WrongIcon /></span>}
                            </p>
                        </div>
                    })
                }
            </div>
            <button className={classes.button} onClick={handleReload}>TRY AGAIN <RepeatIcon/></button>
            
        </section>
    )
}

export default Resultpage;
