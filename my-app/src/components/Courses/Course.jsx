import React from "react";
import './../Courses/courses.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useNavigate } from 'react-router-dom';

let Course = ({ course, setCourseDetails }) => {

    let getDifference = () => {
        if (course.Value > course.Previous) {return (course.Value / course.Previous - 1) * 100 } 
        else {return (course.Previous / course.Value - 1) * -100 }
    };

    const navigate = useNavigate();

    const clickRowHandler = (e) => {
        e.preventDefault();
        navigate('/details');
        setCourseDetails(course);
    }

    return (
        <Tippy content={course.Name} placement="bottom">
        <tr onClick={clickRowHandler}>
            <td>{course.CharCode}</td>
            <td>{(course.Value).toFixed(2)}</td>
            <td>{(getDifference()).toFixed(2)}</td>
        </tr>
        </Tippy>
    )
}

export default Course;