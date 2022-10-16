import React from 'react'
import './styles.scss'

export default class FilterBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onSelectedCourseTypeChange(e.target.value)
    }

    render() {
        return (
            <div className="FilterBar">
                <label>Course Type</label>
                <select value={this.props.selectedCourseType} onChange={this.handleChange}>
                    <option disabled value="">Please Select</option>
                    {this.props.list.map((item) => 
                        <option key={item} value={item}>{item.replace('-', ' ')}</option>
                    )}
                </select>
            </div>
        )
    }
}
