import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../../mobx/store'
import './index.less'

@inject('store')
@observer
export default class Function extends React.Component {
    state = {
        completed: false
    }
    render() {
        return (
            <div className={`function page ${this.props.className}`}>
                <div className="function-container">
                    <div className="kebiao">
                        <div className={`kebiaoicon ${this.state.completed ? 'fadeInUp' : ''}`}></div>
                        <p className={`function-title ${this.state.completed ? 'fadeInUp' : ''}`}>{store.language.function.kebiao.title}</p>
                        <p className={`function-description ${this.state.completed ? 'fadeInUp' : ''}`}>{store.language.function.kebiao.description}</p>
                    </div>
                    <div className="kongjiaoshi">
                        <div className={`kongjiaoshiicon ${this.state.completed ? 'fadeInUp' : ''}`}></div>
                        <p className={`function-title ${this.state.completed ? 'fadeInUp' : ''}`}>{store.language.function.kongjiaoshi.title}</p>
                        <p className={`function-description ${this.state.completed ? 'fadeInUp' : ''}`}>{store.language.function.kongjiaoshi.description}</p>
                    </div>
                    <div className="meikeyue">
                        <div className={`meikeyueicon ${this.state.completed ? 'fadeInUp' : ''}`}></div>
                        <p className={`function-title ${this.state.completed ? 'fadeInUp' : ''}`}>{store.language.function.meikeyue.title}</p>
                        <p className={`function-description ${this.state.completed ? 'fadeInUp' : ''}`}>{store.language.function.meikeyue.description}</p>
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