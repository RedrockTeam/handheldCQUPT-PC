import React from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './index.less'
import store from '../../../mobx/store';

@inject('store')
@observer
export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-in">
                    <div className="logo">{this.props.match}</div>
                    <nav>
                        <Link to="/"><div className="link"><div className={`link-in ${store.path === '/' ? 'link-in-active' : ''}`}>{store.language.header.home}</div></div></Link>
                        <Link to="/download"><div className="link"><div className={`link-in ${store.path === '/download' ? 'link-in-active' : ''}`}>{store.language.header.download}</div></div></Link>
                        <a href="http://hongyan.cqupt.edu.cn/" target="_blank" rel="noopener noreferrer"><div className="link"><div className="link-in">{store.language.header.redrock}</div></div></a>
                        <a href="https://redrock.team/aboutus/" target="_blank" rel="noopener noreferrer"><div className="link"><div className="link-in">{store.language.header.aboutus}</div></div></a>
                        <div className="switcher">
                            <div className={`language ${store.language.language === 'cn' ? 'language-active' : ''}`} onClick={this.changeCN}>中</div>
                            <div className={`language ${store.language.language === 'en' ? 'language-active' : ''}`} onClick={this.changeEN}>EN</div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
    changeEN = () => {
        store.changeLanguage('en')
    }
    changeCN = () => {
        store.changeLanguage('cn')
    }
}