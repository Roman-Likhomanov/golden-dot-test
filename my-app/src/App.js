import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import СoursesContainer from './components/Courses/CoursesContainer';

const App = () => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <СoursesContainer />
    </BrowserRouter>
}

export default App;
