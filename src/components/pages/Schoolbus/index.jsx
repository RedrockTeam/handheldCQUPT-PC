import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../../mobx/store'
import './index.less'

@inject('store')
@observer
export default class Schoolbus extends React.Component {
    render() {
        return (
            <div className={`schoolbus page ${this.props.className}`}></div>
        )
    }
}