import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighLighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logo from './logo.svg';
import './App.css';
import { react } from '@babel/types';

//A custom component to render code blocks with syntax highlighting
const CodeBlock = ({ language, value}) => {
  return <SyntaxHighLighter style={dark} language={language} children={value} />
}

//The main component that renders the editor and the preview
const MarkdownEditor = () => {
  //remember to come back and use redux to manage the state of the markdown text

  //for simplicity,I will use a local state here
  const [markdown, setMarkdown] = React.useState ();

  //A function to handle the change event of the textarea
  const handleChange = (event) => {
    //you need to disptach an action to update the Redux store
    //For simplicity, I will use the local state here
    setMarkdown(event.targer.value);
  };

  return <section className='container'>

    <section className='row'>

      <div className='col-md-6'>
        <h1>Editor</h1>
        <textarea id='editor' className='form-control' value={markdown} onChange={handleChange}/>
      </div>

      <div className='col-md-6'>
        <h2>Preview</h2>
        <div id='preview' className='card'>
          <div className='card-body'>
            <ReactMarkdown children={markdown} components={{ code: CodeBlock }}/>
          </div>
        </div>
      </div>

    </section>
    
  </section>
}

const rootReducer = combineReducers({
  markdown: markdownReducer
})

function App() {
  return (
    <div className="App">
      <provider store={store}>
        <MarkdownEditor />
      </provider>
    </div>
  );
}

export default App;
