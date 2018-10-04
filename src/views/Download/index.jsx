import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../mobx/store';
import './index.less'

@inject('store')
@observer
export default class Download extends React.Component {
    render() {
        return (
            <div>download{store.path}</div>
        )
    }
    componentWillMount() {
        store.changePath('/download')
    }
}