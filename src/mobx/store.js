import { observable, action} from 'mobx'
import data from './data'

let currentLanguage = window.localStorage.getItem('language')
if (!currentLanguage || (currentLanguage !== 'cn' && currentLanguage !== 'en')) {
    window.localStorage.setItem('language', 'cn')
    currentLanguage = 'cn'
}

class Store {
    @observable language = data[currentLanguage]
    @observable path = '/'

    @action changeLanguage(language) {
        this.language = data[language]
        window.localStorage.setItem('language', language)
    }
    @action changePath(path) {
        this.path = path
    }
}

export default new Store()