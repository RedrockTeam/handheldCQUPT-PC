import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../mobx/store';
import Footer from '../../components/Layout/Footer'
import './index.less'

@inject('store')
@observer
export default class Download extends React.Component {
    render() {
        return (
            <div className="download">
                download{store.path}
                <Footer/>
            </div>
        )
    }
    componentWillMount() {
        store.changePath('/download')
    }
}