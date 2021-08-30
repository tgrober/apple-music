import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import AppRouter from './router/AppRouter';
import reportWebVitals from './reportWebVitals';
import MusicProvider from './providers/MusicProvider';

let musicProvider = MusicProvider.sharedProvider();
musicProvider.configure();
let musicInstance = musicProvider.getMusicInstance();

document.addEventListener('musickitloaded', function() {
  // MusicKit global is now defined
  MusicKit.configure({
    developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhRMjI5VjRNOVUifQ.eyJpYXQiOjE2MzAyNzE5MDIsImV4cCI6MTY0NTgyMzkwMiwiaXNzIjoiVzlNOVBUVjNSSiJ9._MNLp1WK7DhDAo85bTgKpBGBPL-b2gMm1YTymYKrpplH-JYHawbUyVnbFdgPRnQp1P_LvsQkd-t2E7LisXSlgg',
    app: {
      name: 'My Cool Web App',
      build: '1978.4.1'
    }
  });
});

// ReactDOM.render(
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(<AppRouter musicInstance={musicInstance} />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
