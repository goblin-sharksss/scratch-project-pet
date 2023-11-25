import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import CreatePage from '../components/CreatePage.jsx';
// import './scss/_app.scss';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
