import React from 'react'
import CourseList from '../CourseList/CourseList'
import FilterBar from '../FilterBar/FilterBar'
import courseData from '../../data/courses.json'
import './styles.scss'

export default class FilterableCourseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {selectedCourseType: ''}
        this.handleSelectedCourseTypeChange = this.handleSelectedCourseTypeChange.bind(this)
    }

    onlyUnique = (value, index, self) => self.indexOf(value) === index

    uniqueCourseTypes = courseData.map((course) => course['course-type']).filter(this.onlyUnique)

    filteredCourse = () => {
        if (!this.state.selectedCourseType) {
            return courseData
        }
        return courseData.filter((course) => course['course-type'] === this.state.selectedCourseType)
    }

    handleSelectedCourseTypeChange (type) {
        this.setState({
            selectedCourseType: type
        })
    }

    render() {
        return(
            <div className="FilterableCourseList">
                <FilterBar
                    list={this.uniqueCourseTypes}
                    onSelectedCourseTypeChange={this.handleSelectedCourseTypeChange}
                    selectedCourseType={this.state.selectedCourseType}
                />
                <p>Showing {this.filteredCourse().length} results</p>
                <CourseList courses={this.filteredCourse()} />
            </div>
        )
        
    }
}
