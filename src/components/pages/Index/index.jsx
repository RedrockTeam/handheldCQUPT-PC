import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../../mobx/store'
import { Link } from 'react-router-dom'
import './index.less'

@inject('store')
@observer
export default class Index extends React.Component {
    render() {
        return (
            <div className={`index page ${this.props.className}`}>
                <div className="index-container">
                    <div className="banner fadeIn"></div>
                    <div className="right">
                        <p className="title fadeInUp">{store.language.index.title}</p>
                        <p className="sub-title fadeInUp">{store.language.index.subTitle}</p>
                        <p className="description fadeInUp">{store.language.index.description}</p>
                        <Link to="/download"><button className="download-button fadeInUp">{store.language.download}</button></Link>
                    </div>
                </div>
                <div className="arrow float"></div>
            </div>
        )
    }
}