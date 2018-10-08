import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../../mobx/store'
import './index.less'

@inject('store')
@observer
export default class Function extends React.Component {
    render() {
        return (
            <div className={`function page ${this.props.className}`}></div>
        )
    }
}