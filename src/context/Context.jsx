import React, { createContext, useContext, useState } from 'react';
import main from '../config/gemini';

// Create the context
export const Context = createContext();


// Provider component
const ContextProvider = (props) => {
    const [input , setInput] = useState("")
    const [recentPrompt , setRecentPrompt] = useState("")
    const [prevPrompts , setPrevPrompts] = useState("")
    const [showResult , setShowResult] = useState(false)
    const [loading , setLoading] = useState(false) 
    const [resultData , setResultData] = useState("")

    const onSent = async (userInput) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await main(input)
        setResultData(response)
        setLoading(false)
        setInput("")
    }

    // onSent("what is react js ?")

    const contextValue = {
        prevPrompts,
        setPrevPrompts ,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
};

export default ContextProvider ;
