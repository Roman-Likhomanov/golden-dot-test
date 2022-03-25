import React, { useEffect } from 'react';
import Course from './Course';
import './courses.css';


let Courses = ({ courses, setCourseDetails }) => {

    return <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th className="tdName">Код валюты</th>
                    <th className="tdMail">Курс ₽</th>
                    <th className="tdDate">Изменение курса %</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.values(courses).map(e => <Course setCourseDetails={setCourseDetails} course={e}
                        key={e.ID}
                    />)
                }
            </tbody>
        </table>
    </div>
}

export default Courses;