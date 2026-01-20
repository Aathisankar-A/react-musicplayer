import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App.jsx'
import './index.css'

import SongProvider from "./Context/SongContext/SongContext.jsx";
import PlaylistProvider from "./Context/PlaylistContext/PlaylistContext.jsx";
import QueueProvider from "./Context/QueueContext/QueueContext.jsx";
import ViewProvider from "./Context/ViewContext/ViewContext.jsx";
import PlayerUIProvider from './Context/PlayerUIContext/PlayerUIContext.jsx';
import SearchProvider from './Context/SearchContext/SearchContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ViewProvider>
        <PlayerUIProvider>
          <SongProvider>
            <QueueProvider>
              <PlaylistProvider>
                <SearchProvider>
                  <App />
                </SearchProvider>
              </PlaylistProvider>
            </QueueProvider>
          </SongProvider>
        </PlayerUIProvider>
      </ViewProvider>
    </BrowserRouter>
  </StrictMode>
)