import React from 'react';

export const App = ({questions, answers, handleVote})=>(
    <div>
        <h1>Dev Team Decision Tool</h1>

        {questions.map(({questionId, content})=>(

            <div className="question" key={questionId}>

                <div>

                    {content}
                    
                </div>
                <div>

                    {answers.filter(answer => answer.questionId === questionId).map(({
                        
                        content, 
                        upvotes, 
                        answerId
                    
                    })=>(

                        <div key={answerId}>

                            <div className="answerContent">

                                {content} - {upvotes}

                            </div>

                            <div className="buttonContainer">

                                <button onClick={()=>handleVote(answerId, 1)}>+</button>
                                <button onClick={()=>handleVote(answerId, -1)}>-</button>

                            </div>
                            
                        </div>
                    
                    ))}

                </div>

            </div>

        ))}
        
    </div>
)