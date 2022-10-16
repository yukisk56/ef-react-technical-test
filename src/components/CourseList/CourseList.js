import React from 'react'
import CourseCard from '../CourseCard/CourseCard'
import './styles.scss'

function CourseList(props) {
    const courses = props.courses

    return (
        <ul className="CourseList">
            {courses.map((course) => 
                <CourseCard key={course.id} item={course} />
            )}
        </ul>
    )
}

export default CourseList