import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import * as classes from "./Quizpage.module.css";
import WrongIcon from "../icons/WrongIcon";
import Checkmark from "../icons/Checkmark";
import NextIcon from "../icons/NextIcon";
import SubmitIcon from "../icons/SubmitIcon";

const Quizpage = ({ resultData, setResultData }) => {
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [quizContent, setQuizContent] = useState([]);
    const [trueClicked, setTrueClicked] = useState(false);
    const [falseClicked, setFalseClicked] = useState(false);
    const [isLastQuestion, setIsLastQuestion] = useState( false);
    const [pickedAnswer, setPickedAnswer] = useState("");
    // const [resultData, setResultData] = useState([]);
    const [noOption, setNoOption] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        setLoading(true);
        fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
        .then(response => response.json())
        .then(({results})=> {
            const quizData = [...results];
            if ( Array.isArray(results) && results.length>0 ) {
                setQuizContent(quizData);
            } else {
                console.log("No quiz data found:", results);
            }
            setLoading(false)
        })
        .catch((error)=>{
            console.log("Error fetching quiz data:", error);
        })
    },[]);

    // useEffect(()=>{
    //     if(resultData.length === 10) {
    //         setTimeout(() => navigate("/result", { state: { result: resultData } }), 0);
            
    //     }
    // },[resultData])


    const handleTrue = () => {
        setFalseClicked(false);
        setTrueClicked(true);
        setPickedAnswer("True");
        setNoOption(false);
    }

    const handleFalse = () => {
        setTrueClicked(false);
        setFalseClicked(true);
        setPickedAnswer("False");
        setNoOption(false);
    }

    const handleContinue = (index) => {
        if(index===8 && trueClicked || index===8 && falseClicked) {
            setIsLastQuestion(true);
        }
        if (trueClicked || falseClicked) {
            if(!isLastQuestion) {
                setIndex(index+1);
                setFalseClicked(false);
                setTrueClicked(false);
            }


            setResultData( currentData => [...currentData, {
                index,
                question: quizContent[index].question,
                correct_answer: quizContent[index].correct_answer,
                answer_picked: pickedAnswer
            }] )
            
        }
        if (!trueClicked && !falseClicked) {
            setNoOption(true)
        }
        
        if (isLastQuestion && trueClicked || isLastQuestion && falseClicked) {
                if (resultData[9]) {
                    }
                    navigate('/result', {replace: true});
                }
            }
            
    
    if (loading) {
        return <div>Loading...</div>
    }

    const questionMarkup = () => {
        return {__html: quizContent[index]?.question}
    }
    const categoryMarkup = () => {
        return {__html: quizContent[index]?.category}
    }

    return (
        <section className={classes.section}>
            <div>

            <div className={classes.quiznumber} > {index + 1} of {quizContent.length} (<span dangerouslySetInnerHTML={categoryMarkup()}/>) </div>
            <div className={classes.question} dangerouslySetInnerHTML={questionMarkup()} />
            </div>
            <div className={classes.option}>
                <button className={`${classes.true} ${trueClicked ? classes.true_clicked : ""}`} onClick={handleTrue}>
                    <span><Checkmark/></span>
                    True 
                </button>
                <button className={`${classes.wrong} ${falseClicked ? classes.false_clicked: ''}`} onClick={handleFalse}>
                    <span><WrongIcon/></span>
                    False
                </button>
            </div>
            <div className={classes.button}>

            {noOption && <span className={classes.no_option}>Please, answer this question</span>}

            {isLastQuestion ? 
                <button className={classes.submit} onClick={()=>handleContinue(index)}>
                    SUBMIT     
                    <span><SubmitIcon /></span>
                </button>
                    : 
                <button className={classes.continue}  onClick={()=>handleContinue(index)}>
                    CONTINUE        
                    <span><NextIcon /></span>
                </button>
                   }
            </div>
        </section>
    )
}

export default Quizpage;
