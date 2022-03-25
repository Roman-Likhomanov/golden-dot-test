import React, { useEffect, useState } from 'react';
import Courses from './Courses';
import * as axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Details from '../Details/Details';

const CoursesContainer = (props) => {

  const [courses, setCourses] = useState({});
  const [courseDetails, setCourseDetails] = useState({});
  
  useEffect(() => {
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
      .then(response => {
        setCourses(response.data['Valute']);
      });
  }, []);

  return <>
    <Routes>
      <Route path="/details" element={<Details courseDetails={courseDetails}/>
      } />
      <Route path="/" element={
        <Courses courses={courses}
          setCourseDetails={setCourseDetails}
        />
      } />
    </Routes>
  </>
}

export default CoursesContainer;