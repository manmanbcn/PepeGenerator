import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { Footer } from './components/footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App Header = {Header} Main = {Main} Footer = {Footer} />);
