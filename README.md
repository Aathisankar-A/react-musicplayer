# React Music Player

A React-based music streaming application inspired by Spotify, featuring a sleek UI for playing music, managing playlists, and exploring content.

## Features

- **Audio Playback**: Play, pause, skip, and control audio tracks with sample MP3 files
- **Playlist Management**: Create and manage playlists
- **Library Browsing**: Explore your music library with grid views
- **Search Functionality**: Search through songs and content
- **Queue Management**: Manage your playback queue
- **Podcast Support**: Listen to podcasts with dedicated sections
- **Responsive Design**: Optimized for various screen sizes
- **Context-Based State Management**: Efficient state handling using React Context API

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **State Management**: React Context API
- **Styling**: CSS Modules
- **Audio**: HTML5 Audio API
- **Icons**: SVG assets

## Project Structure

- `src/components/`: UI components (App, Panels, Controls, Playlists, etc.)
- `src/Context/`: React Context providers for state management (Song, Queue, View, Search)
- `src/assets/`: Static files (audio samples, images, icons)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-spotify/musicplayer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (default Vite port)

## Usage

- **Navigation**: Use the left panel to browse different sections (For You, Top 50, Podcasts, etc.)
- **Playback**: Click on any song card to start playing
- **Controls**: Use the bottom player controls for play/pause, skip, and volume
- **Search**: Use the search bar to find specific songs or artists
- **Queue**: View and manage your playback queue in the right panel

## Sample Content

The application includes sample audio files and images for demonstration:
- Sample MP3 tracks
- Playlist cover images
- Podcast episodes

## Future Plans

This project is planned to be scaled with a backend implementation to include:

- **User Authentication**: Sign up, login, and user profiles
- **Cloud Storage**: Upload and store personal music files
- **Database Integration**: Persistent playlists and user data
- **API Integration**: Connect to music streaming services
- **Real-time Features**: Live chat, collaborative playlists
- **Advanced Search**: Full-text search with filters
- **Recommendations**: AI-powered music suggestions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Inspired by various musicplayer's user interface and functionality
- Built with React and modern web technologies
