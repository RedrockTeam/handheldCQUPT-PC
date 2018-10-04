import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../mobx/store';
import './index.less'

@inject('store')
@observer
export default class Home extends React.Component {
    render() {
        return (
            <div>home{store.path}</div>
        )
    }
    componentWillMount() {
        store.changePath('/')
    }
}