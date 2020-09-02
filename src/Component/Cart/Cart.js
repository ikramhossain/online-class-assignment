import React from 'react';

const Cart = (props) => {
    const course = props.data;

    let totalFee = 0
    for (let i = 0; i < course.length; i++) {
        const courseData = course[i];
        totalFee = totalFee + courseData.price
    }
    return (
        <div className="card text-left my-3">
            <div className="card-body">
                <h5 className="card-title"><strong>Course Enrolled: {course.length} </strong></h5>
                <p><strong>Total Fee: $ {totalFee.toFixed(2)}</strong></p>
            </div>
        </div>
    );
};

export default Cart;