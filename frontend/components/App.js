// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Wheel from './Wheel'
import Quiz from './Quiz'
import Message from './Message'
import Form from './Form'
import { createStore } from 'redux';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// REDUX IMPORTS
import {  applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import  reducer from '../state/reducer'
import { PersistGate } from 'redux-persist/integration/react'

// REDUX STORE
const persistConfig = {
  key: 'persist-key',
  storage
}
const persistedreducer = persistReducer(persistConfig, reducer)
export let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(persistedreducer, composeEnhancers(applyMiddleware(thunk)))
  
}
resetStore()

const persistor = persistStore(store)
  export {persistor}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Message />
        <h1>Advanced State</h1>
        <nav>
          
          <NavLink id="wheelLink" to="/">Wheel</NavLink>
          <NavLink id="quizLink" to="/quiz">Quiz</NavLink>
          <NavLink id="formLink" to="/quiz-new">Form</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Wheel />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="quiz-new" element={<Form />} />
        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}
