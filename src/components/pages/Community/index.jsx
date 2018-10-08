import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../../mobx/store'
import './index.less'

@inject('store')
@observer
export default class Community extends React.Component {
    state = {
        completed: false
    }
    render() {
        return (
            <div className={`community page ${this.props.className}`}>
                <div className="community-container">
                    <div className={`communityphone ${this.state.completed ? 'phoneRight' : ''}`}></div>
                    <div className="right-description">
                        <p className={`right-title ${this.state.completed ? 'rightInLeft' : ''}`}>{store.language.community.title}</p>
                        <p className={`right-subtitle ${this.state.completed ? 'rightInLeft' : ''}`}>{store.language.community.description}</p>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                    </div>
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