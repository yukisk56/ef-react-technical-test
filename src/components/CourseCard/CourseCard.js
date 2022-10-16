import React from 'react'
import CourseOverview from '../CourseOverview/CourseOverview'
import CourseDetail from '../CourseDetail/CourseDetail'
import './styles.scss'

function CourseCard(props) {
    const item = props.item

    return (
        <div className="courseCard">
            <CourseOverview data={item} />
            <CourseDetail list={item.topics} />
        </div>
    )
}

export default CourseCard
