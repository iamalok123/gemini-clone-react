import React, { createContext, useContext, useState } from 'react';
import main from '../config/gemini';

// Create the context
export const Context = createContext();

// Code formatting utility functions
const detectLanguage = (codeBlock) => {
    const code = codeBlock.toLowerCase();
    
    if (code.includes('function') || code.includes('const') || code.includes('let') || code.includes('console.log')) {
        return 'javascript';
    }
    if (code.includes('def ') || code.includes('import ') || code.includes('print(')) {
        return 'python';
    }
    if (code.includes('public class') || code.includes('public static')) {
        return 'java';
    }
    if (code.includes('#include') || code.includes('using namespace')) {
        return 'cpp';
    }
    if (code.includes('using System') || code.includes('namespace ')) {
        return 'csharp';
    }
    if (code.includes('<?php') || code.includes('echo ')) {
        return 'php';
    }
    if (code.includes('<html') || code.includes('<div') || code.includes('<p')) {
        return 'html';
    }
    if (code.includes('{') && code.includes('}') && (code.includes('margin') || code.includes('padding'))) {
        return 'css';
    }
    if (code.includes('SELECT') || code.includes('INSERT') || code.includes('FROM')) {
        return 'sql';
    }
    if (code.includes('#!/') || code.includes('echo ') || code.includes('if [')) {
        return 'bash';
    }
    if (code.includes('interface ') || code.includes('type ')) {
        return 'typescript';
    }
    if (code.includes('import React') || code.includes('useState')) {
        return 'react';
    }
    if (code.includes('require(') || code.includes('module.exports')) {
        return 'nodejs';
    }
    
    return 'text';
};

const formatCodeBlock = (codeBlock, language) => {
    // Remove markdown code block markers
    let cleanCode = codeBlock.replace(/```[\w]*\n?/g, '').replace(/```/g, '');
    
    // Basic indentation formatting
    const lines = cleanCode.split('\n');
    let indentLevel = 0;
    const indentSize = 2;
    
    const formattedLines = lines.map(line => {
        const trimmedLine = line.trim();
        
        // Decrease indent for closing braces/brackets
        if (trimmedLine.match(/^[})\]]/)) {
            indentLevel = Math.max(0, indentLevel - 1);
        }
        
        const indent = ' '.repeat(indentLevel * indentSize);
        const formattedLine = indent + trimmedLine;
        
        // Increase indent for opening braces/brackets
        if (trimmedLine.match(/[{([]$/)) {
            indentLevel++;
        }
        
        return formattedLine;
    });
    
    return formattedLines.join('\n');
};

const processCodeBlocks = (text) => {
    // Find code blocks with language specification
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let processedText = text;
    let match;
    
    while ((match = codeBlockRegex.exec(text)) !== null) {
        const fullMatch = match[0];
        const language = match[1] || detectLanguage(match[2]);
        const codeContent = match[2];
        
        const formattedCode = formatCodeBlock(codeContent, language);
        const htmlCodeBlock = `
            <div class="code-block">
                <div class="code-header">
                    <span class="language-badge">${language.toUpperCase()}</span>
                </div>
                <pre class="code-content ${language}"><code>${formattedCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
            </div>
        `;
        
        processedText = processedText.replace(fullMatch, htmlCodeBlock);
    }
    
    return processedText;
};

const processMarkdownHeadings = (text) => {
    // Process markdown headings
    return text
        .replace(/^### (.*$)/gim, '<h3 class="markdown-heading h3">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="markdown-heading h2">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 class="markdown-heading h1">$1</h1>');
};

// Provider component
const ContextProvider = (props) => {
    const [input , setInput] = useState("")
    const [recentPrompt , setRecentPrompt] = useState("")
    const [prevPrompts , setPrevPrompts] = useState([])
    const [showResult , setShowResult] = useState(false)
    const [loading , setLoading] = useState(false) 
    const [resultData , setResultData] = useState("")

    const newChat = () => {
        setLoading(false) ;
        setShowResult(false) ;
    }

    const onSent = async (userInput, addToHistory = true) => {
        const promptToSend = userInput || input;
        
        if (!promptToSend || promptToSend.trim() === '') {
            return;
        }
        
        setResultData("")
        setLoading(true)
        setShowResult(true)
        
        if (addToHistory) {
            setPrevPrompts(prev => [...prev , promptToSend])
        }
        setRecentPrompt(promptToSend)
        
        const response = await main(promptToSend)
        
        // Process response with optimized formatting
        let processedResponse = response
            .split("**")
            .map((part, index) => {
                if (index % 2 === 1) {
                    return `<strong>${part}</strong>`
                }
                return part
            })
            .join("")
        
        // Apply markdown heading processing
        processedResponse = processMarkdownHeadings(processedResponse)
        
        // Apply code block processing
        processedResponse = processCodeBlocks(processedResponse)
        
        // Handle other formatting
        processedResponse = processedResponse
            .split("*")
            .join("<br>")
            .replace(/\n/g, "<br>")
        
        // Use requestAnimationFrame to avoid forced reflow
        requestAnimationFrame(() => {
            setResultData(processedResponse)
            setLoading(false)
            setInput("")
        })
    }

    const loadPreviousPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt, false) // Don't add to history again
    }

    // onSent("what is react js ?")

    const contextValue = {
        prevPrompts,
        setPrevPrompts ,
        onSent,
        loadPreviousPrompt,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
};

export default ContextProvider ;
