import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaRegCopy, FaRegClipboard } from "react-icons/fa"


import './CodeBlockContainer.css'

export default function CodeBlockContainer({ code, language='javascript', mode='dark', showCopy=false }) {

  const [clickedCopy, setClickedCopy] = useState(false)
  
  return (
    <div className="CodeBlock">
      {
        showCopy ? 
        <CopyToClipboard className="CopyButton" text={code}>
          {  
            clickedCopy ? <FaRegClipboard onClick={() => setClickedCopy(!clickedCopy)}/> : <FaRegCopy onClick={() => setClickedCopy(!clickedCopy)}/>
          } 
        </CopyToClipboard> :
        null
      }
      <SyntaxHighlighter classname="CodeBlock" language={language} style={mode === 'dark' ? atomDark : prism }>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};