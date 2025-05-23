import React from 'react';
import ReactDOM from 'react-dom/client';
import { Editor } from './editor';

const config = {
  assetPath: '/assets',
  frame: {
    defaultImage: {
      width: 800,
      height: 600,
      url: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg'
    }
  }
};

const getFonts = async () => {
  return [];
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Editor config={config} getFonts={getFonts} />
  </React.StrictMode>
);