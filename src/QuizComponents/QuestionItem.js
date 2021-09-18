export default function QuestionItem({ state, answer, nextQuestion, score, handleInput }) {
    const { name, "answers": { answer1, answer2, answer3, answer4 } } = state

    return (
           <div className="question-item">
                <div className="question">
                    <h3>What's the state capital of <b>{name}</b>?</h3>
                </div>
                <div className="answer options">
                    <div>
                        <input 
                            type="radio" 
                            id={answer1}
                            checked={answer===answer1}
                            value={answer1} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer1}</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id={answer2}
                            checked={answer===answer2}
                            value={answer2} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer2}</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id={answer3}
                            checked={answer===answer3}
                            value={answer3} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer3}</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id={answer4}
                            checked={answer===answer4}
                            value={answer4} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer4}</label>
                    </div>
                </div>
                <div className="next">
                    <button className="ui blue basic button" onClick={nextQuestion}>Next Question</button>
                </div>
           </div>
       )    
}