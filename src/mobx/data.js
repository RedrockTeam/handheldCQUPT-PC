const cn = {
    language: 'cn',
    header: {
        home: '首页',
        download: '下载',
        redrock: '红岩网校',
        aboutus: '关于我们'
    },
    sidebar: {
        home: '首页',
        function: '基本功能',
        community: '社区版聊',
        schoolbus: '校车轨迹',
        query: '一体化查询'
    }
}

const en = {
    language: 'en',
    header: {
        home: 'Home',
        download: 'Download',
        redrock: 'Redrock',
        aboutus: 'About us'
    },
    sidebar: {
        home: 'Home',
        function: 'Basic functions',
        community: 'Community',
        schoolbus: 'School bus positioning',
        query: 'Integrated query'
    }
}

export default {
    cn: cn,
    en: Object.assign({}, cn, en)
}