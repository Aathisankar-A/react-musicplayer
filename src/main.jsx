import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'

import SongProvider from "./Context/SongContext/SongContext.jsx";
import PlaylistProvider from "./Context/PlaylistContext/PlaylistContext.jsx";
import QueueProvider from "./Context/QueueContext/QueueContext.jsx";
import ViewProvider from "./Context/ViewContext/ViewContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViewProvider>
      <SongProvider>
        <QueueProvider>
          <PlaylistProvider>
            <App />
          </PlaylistProvider>
        </QueueProvider>
      </SongProvider>
    </ViewProvider>
  </StrictMode>
)
