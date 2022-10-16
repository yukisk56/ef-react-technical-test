import React from 'react'
import './styles.scss'

function CourseOverview(props) {
    const data = props.data

    const capitaliseFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="CourseOverview">
            <label>{capitaliseFirstLetter(data['course-type']).replace('-', ' ')}</label>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}

export default CourseOverview