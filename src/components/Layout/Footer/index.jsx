import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../../mobx/store'
import './index.less'

@inject('store')
@observer
export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>{store.language.footer.line1}</p>
                <p style={{paddingTop: '10px'}}>{store.language.footer.line2}</p>
            </footer>
        )
    }
}