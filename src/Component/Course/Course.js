import React from 'react';

const Course = (props) => {
    const {course, institute, price } = props.course;
    return (
        <div className="card w-75 text-left my-3">
            <div className="card-body">
                <h5 className="card-title"><strong>Course Name:</strong> {course}</h5>
                <p className="card-text">Offered By: {institute}</p>
                <p><strong>Fee: ${price}</strong></p>
                <button onClick={() => props.buttonHandler(props.course)} className="btn btn-danger">Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;