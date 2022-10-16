import React from 'react'
import './styles.scss'

function CourseDetail(props) {
    const list = props.list

    return (
        <ul className="CourseDetail">
            <p><strong>Key Topics & Skills</strong></p>
            {list.map((item) => 
                <li key={item}>{item}</li>
            )}
        </ul>
    )
}

export default CourseDetail