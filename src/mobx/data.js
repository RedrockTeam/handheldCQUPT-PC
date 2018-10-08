const cn = {
    language: 'cn',
    download: '立即下载',
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
    },
    index: {
        title: '掌上重邮',
        subTitle: 'Handheld CQUPT',
        description: '重邮首款完美整合校园信息与生活的APP'
    },
    function: {
        kebiao: {
            title: '课表查询',
            description: '课程信息一目了然'
        },
        kongjiaoshi: {
            title: '空教室查询',
            description: '再也不缺自习好去处'
        },
        meikeyue: {
            title: '没课约',
            description: '课下安排轻松搞定'
        }
    },
    community: {
        title: '社区版聊',
        description: '各类问题轻松解决，在这里发现你的新圈子'
    },
    schoolbus: {
        title: '校车轨迹',
        description: '即刻查询校车位置，减少不必要的等待时间'
    },
    query: {
        title: '一体化查询',
        description: '志愿时长，考试信息，学生名单，宿舍电费一键查询'
    },
    footer: {
        line1: '本网站由红岩网校工作站负责开发，管理，不经红岩网校委员会书面同意，不得进行转载',
        line2: '地址：重庆市南岸区崇文路2号（重庆邮电大学内） 400065 E-mail: redrock@cqupt.edu.cn (023-62461084)'
    }
}

const en = {
    language: 'en',
    download: 'DOWNLOAD',
    header: {
        home: 'Home',
        download: 'Downloads',
        redrock: 'Redrock',
        aboutus: 'About us'
    },
    sidebar: {
        home: 'Home',
        function: 'Basic functions',
        community: 'Community chat',
        schoolbus: 'School bus positioning',
        query: 'Integrated query'
    },
    index: {
        title: 'Handheld CQUPT',
        subTitle: '',
        description: `CQUPT's first APP that perfectly integrates campus information and life`
    },
    function: {
        kebiao: {
            title: 'Class schedule inquiry',
            description: 'Course information at a glance'
        },
        kongjiaoshi: {
            title: 'Empty classroom inquiry',
            description: 'There will be no shortage of places to learn.'
        },
        meikeyue: {
            title: 'Have time to play together',
            description: 'The easier arrangement after class'
        }
    },
    community: {
        title: 'Community chat',
        description: 'Easy to solve all kinds of problems, find your new circle here'
    },
    schoolbus: {
        title: 'School bus positioning',
        description: 'The location of school buses is immediately queried to reduce unnecessary waiting times'
    },
    query: {
        title: 'Integrated query',
        description: 'Volunteer time, exam information, student list, dormitory electricity fee, one-click inquiry'
    },
    footer: {
        line1: `Copyright © ${new Date().getFullYear()} Redrock`,
        line2: 'Address: 2 Chongwen Rd, HuangJueYa, Nanan Qu, Chongqing Shi, China, 400065 E-mail: redrock@cqupt.edu.cn (023-62461084)'
    }
}

export default {
    cn: cn,
    en: Object.assign({}, cn, en)
}