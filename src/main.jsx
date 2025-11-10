import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'

import SongProvider from "./Context/SongContext/SongContext.jsx";
import PlaylistProvider from "./Context/PlaylistContext/PlaylistContext.jsx";
import QueueProvider from "./Context/QueueContext/QueueContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SongProvider>
      <QueueProvider>
        <PlaylistProvider>
          <App />
        </PlaylistProvider>
      </QueueProvider>
    </SongProvider>
  </StrictMode>
)
