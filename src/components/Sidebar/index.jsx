import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../mobx/store'
import './index.less'

@inject('store')
@observer
export default class Query extends React.Component {
    render() {
        return (
            <div className="sidebar fadeInLeft">
                <div className={this.changeActiveClass(1)} onClick={() => this.props.onClicked(1)}>
                    <p>{store.language.sidebar.home}</p>
                </div>
                <div className={this.changeActiveClass(2)} onClick={() => this.props.onClicked(2)}>
                    <p>{store.language.sidebar.function}</p>
                </div>
                <div className={this.changeActiveClass(3)} onClick={() => this.props.onClicked(3)}>
                    <p>{store.language.sidebar.community}</p>
                </div>
                <div className={this.changeActiveClass(4)} onClick={() => this.props.onClicked(4)}>
                    <p>{store.language.sidebar.schoolbus}</p>
                </div>
                <div className={this.changeActiveClass(5)} onClick={() => this.props.onClicked(5)}>
                    <p>{store.language.sidebar.query}</p>
                </div>
            </div>
        )
    }

    changeActiveClass = index => this.props.index === index ? 'side-link side-link-active' : 'side-link'

}