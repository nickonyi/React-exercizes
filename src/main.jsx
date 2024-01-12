import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PackingList from './PackingList.jsx'
import List from './List.jsx'
import People from './people.jsx'
import RecipeList from './RecipeList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeList />
  </React.StrictMode>,
)
