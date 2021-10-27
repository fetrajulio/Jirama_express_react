import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Components/app';
import Head from './Components/head';
import List from './Components/liste';
ReactDOM.render(
    
    <Head />,
 document.getElementById('rootHead')
 );
 ReactDOM.render(
    <App />,
    document.getElementById('root')
 );

 ReactDOM.render(
    <List />,
    document.getElementById('rootList')
 );