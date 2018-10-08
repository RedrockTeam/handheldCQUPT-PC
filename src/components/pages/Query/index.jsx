import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../../mobx/store'
import Footer from '../../../components/Layout/Footer'
import './index.less'

@inject('store')
@observer
export default class Query extends React.Component {
    state = {
        completed: false
    }
    render() {
        return (
            <div className={`query page ${this.props.className}`}>
                <div className="query-container">
                    <div className={`queryphone ${this.state.completed ? 'phoneRight' : ''}`}></div>
                    <div className="right-description">
                        <p className={`right-title ${this.state.completed ? 'rightInLeft' : ''}`}>{store.language.query.title}</p>
                        <p className={`right-subtitle ${this.state.completed ? 'rightInLeft' : ''}`}>{store.language.query.description}</p>
                        <div className="circle1" style={{top: '-185px'}}></div>
                        <div className="circle2" style={{top: '-110px'}}></div>
                        <div className="circle3" style={{top: '-150px'}}></div>
                    </div>
                </div>
                <Footer/>
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