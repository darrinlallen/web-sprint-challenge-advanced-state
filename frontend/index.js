// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
