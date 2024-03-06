import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import logo from './logo.svg';
import './App.css';

// A custom component to render code blocks with syntax highlighting
const CodeBlock = ({ language, children }) => {
  return (
    <SyntaxHighlighter style={okaidia} language={language}>
      {children}
    </SyntaxHighlighter>
  );
};

// A custom component to render inline code
const InlineCode = ({ children }) => {
  return <code>{children}</code>;
};

// The main component that renders the editor and the preview
const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(
    `# Welcome to my React Markdown Previewer!

    \`HelloWorld\`
    
This is a simple markdown editor built with React and Redux.

You can write your markdown text in the editor and see the preview below.

## Features

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- Live preview
- Syntax highlighting
- Responsive design

## Example

Here is some example code:

\`\`\`javascript
const add = (a, b) => a + b;
console.log(add(2, 3));
\`\`\`

And here is some inline code: \`const multiply = (a, b) => a * b;\`

![ilovefood](https://elements.envato.com/front-view-little-yummy-cake-with-lemon-slices-can-GT2AEDH)
And here is the output:`
  );

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <section className='container'>
      <div className='editor'>
        <h1>Editor</h1>
        <textarea id='editor' value={markdown} onChange={handleChange}></textarea>
      </div>

      <div>
        <h2>Preview</h2>
        <div id='preview' className='card'>
          <ReactMarkdown components={{ code: CodeBlock, inlineCode: InlineCode }}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className='App'>
      <MarkdownEditor />
    </div>
  );
}

export default App;
