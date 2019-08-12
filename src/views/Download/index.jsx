import React from 'react'
import { observer, inject } from 'mobx-react'
import store from '../../mobx/store';
import Footer from '../../components/Layout/Footer'
import './index.less'

@inject('store')
@observer
export default class Download extends React.Component {
    state = {
        andriodVersion: '5.0.2',
        iosVersion: '3.6.3',
        andriodLink: 'http://hongyan.cqupt.edu.cn/app/com.mredrock.cyxbs.apk',
        iosLink: 'https://itunes.apple.com/cn/app/zhang-shang-zhong-you/id974026615'
    }
    render() {
        return (
            <div className="download">
                <div className="download-container">
                    <div className="andriod">
                        <div className="mobile-container scale">
                            <div className="mobile-icon andriod-icon"></div>
                            <p className="version-title fadeInUp">{store.language.andriodVersionTitle}</p>
                            <p className="version fadeInUp">{`${store.language.version} ${this.state.andriodVersion}`}</p>
                            <p className="saoma fadeInUp">{store.language.scan}</p>
                        </div>
                        <a href={this.state.andriodLink} target="_blank"><button className="download-button scaleX">{store.language.download}</button></a>
                    </div>
                    <div className="ios">
                        <div className="mobile-container scale">
                            <div className="mobile-icon apple-icon"></div>
                            <p className="version-title fadeInUp">{store.language.iphoneVersionTitle}</p>
                            <p className="version fadeInUp">{`${store.language.version} ${this.state.iosVersion}`}</p>
                            <p className="saoma fadeInUp">{store.language.scan}</p>
                        </div>
                        <a href={this.state.iosLink} target="_blank" rel="noopener noreferrer"><button className="download-button scaleX">{store.language.download}</button></a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    componentWillMount() {
        store.changePath('/download')
    }

    componentDidMount = () => {
        var url = "http://hongyan.cqupt.edu.cn/app/cyxbsAppUpdate.xml"
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                var updataInfo = xhr.responseXML.getElementsByTagName("updataInfo")[0]
                var andriodVersion = updataInfo.getElementsByTagName("versionCode")[0].firstChild.data
                var andriodLink = updataInfo.getElementsByTagName("apkURL")[0].firstChild.data
                this.setState({
                    andriodVersion: andriodVersion,
                    andriodLink: andriodLink
                })
            }
        }
        xhr.open("GET",url)
        xhr.send(null)
    }
}