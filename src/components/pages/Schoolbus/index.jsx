import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../../mobx/store'
import './index.less'

@inject('store')
@observer
export default class Schoolbus extends React.Component {
    state = {
        completed: false
    }
    render() {
        return (
            <div className={`schoolbus page ${this.props.className}`}>
                <div className="schoolbus-container">
                    <div className="left-description">
                        <p className={`left-title ${this.state.completed ? 'rightInLeft' : ''}`}>{store.language.schoolbus.title}</p>
                        <p className={`left-subtitle ${this.state.completed ? 'rightInLeft' : ''}`}>{store.language.schoolbus.description}</p>
                        <div className="circle1" style={{top: '-135px'}}></div>
                        <div className="circle2" style={{top: '-60px'}}></div>
                        <div className="circle3" style={{top: '-100px'}}></div>
                    </div>
                    <div className={`schoolbusphone ${this.state.completed ? 'phoneRight' : ''}`}></div>
                </div>
            </div>
        )
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.className === 'currentPage') {
            this.setState({
                completed: true
            })
        }
    }
}