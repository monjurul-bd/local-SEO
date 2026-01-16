import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'; // এই লাইনটি যোগ করুন

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* অ্যাপকে এটি দিয়ে র‍্যাপ করুন */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)