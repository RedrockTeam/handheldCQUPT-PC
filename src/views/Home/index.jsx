import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../mobx/store';
import './index.less'
import Index from '../../components/pages/Index'
import Function from '../../components/pages/Function'
import Community from '../../components/pages/Community'
import Query from '../../components/pages/Query'
import Schoolbus from '../../components/pages/Schoolbus'
import Sidebar from '../../components/Sidebar'

@inject('store')
@observer
export default class Home extends React.Component {
    state = {
        currentIndex: 1,
        isScrolling: false
    }
    render() {
        return (
            <div className="home">
                <Index className={this.changeClass(1)} onClicked={this.changeIndex}/>
                <Function className={this.changeClass(2)}/>
                <Community className={this.changeClass(3)}/>
                <Schoolbus className={this.changeClass(4)}/>
                <Query className={this.changeClass(5)}/>
                <Sidebar index={this.state.currentIndex} onClicked={this.changeIndex}/>
            </div>
        )
    }

    componentWillMount() {
        store.changePath('/')
    }

    componentDidMount() {
        window.onmousewheel = e => {
            e.stopPropagation()
            e.preventDefault()
            
            if (e.wheelDelta < -30 && !this.state.isScrolling) {
                if (this.state.currentIndex === 5) return
                this.setState(prevState => ({
                    currentIndex: prevState.currentIndex + 1,
                    isScrolling: true
                }))

                setTimeout(() => {
                    this.setState({
                        isScrolling: false
                    })
                }, 1000)
            }
            else if (e.wheelDelta > 30 && !this.state.isScrolling) {
                if (this.state.currentIndex === 1) return
                this.setState(prevState => ({
                    currentIndex: prevState.currentIndex - 1,
                    isScrolling: true
                }))

                setTimeout(() => {
                    this.setState({
                        isScrolling: false
                    })
                }, 1000)
            }
        }
    }

    changeClass = index => {
        if (this.state.currentIndex === index) {
            return 'currentPage'
        }
        else if (this.state.currentIndex > index) {
            return 'prePage'
        }
        else if (this.state.currentIndex < index){
            return 'nextPage'
        }
    }

    changeIndex = index => {
        this.setState({
            currentIndex: index
        })
    }
}