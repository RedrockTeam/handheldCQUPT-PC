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
                    <div className={`communityphone ${this.state.completed ? 'phoneRight' : ''}`}>
                        <div className={`s1 ${this.state.completed ? 'fadeInUp' : ''}`} style={{animationDelay: '.8s'}}>
                            <div className="s1-left">
                                <div className="tou1"></div>
                                <div className="name">{store.language.community.question.q1.name}</div>
                            </div>
                            <div className="s1-right">
                                {store.language.community.question.q1.text}
                            </div>
                        </div>
                        <div className={`s2 ${this.state.completed ? 'fadeInUp' : ''}`} style={{animationDelay: '1.6s'}}>
                            <div className="s1-left">
                                <div className="tou2"></div>
                                <div className="name">{store.language.community.question.q2.name}</div>
                            </div>
                            <div className="s1-right">
                                {store.language.community.question.q2.text}
                            </div>
                            <div className="time">{store.language.community.question.q2.time}</div>
                        </div>
                        <div className={`s2 s3 ${this.state.completed ? 'fadeInUp' : ''}`} style={{animationDelay: '2.1s'}}>
                            <div className="s1-left">
                                <div className="tou3"></div>
                                <div className="name">{store.language.community.question.q3.name}</div>
                            </div>
                            <div className="s1-right">
                                {store.language.community.question.q3.text}
                            </div>
                            <div className="time">{store.language.community.question.q3.time}</div>
                        </div>
                        <div className={`s2 s3 ${this.state.completed ? 'fadeInUp' : ''}`} style={{animationDelay: '2.6s'}}>
                            <div className="s1-left">
                                <div className="tou4"></div>
                                <div className="name">{store.language.community.question.q4.name}</div>
                            </div>
                            <div className="s1-right">
                                {store.language.community.question.q4.text}
                            </div>
                            <div className="time">{store.language.community.question.q4.time}</div>
                        </div>
                    </div>
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