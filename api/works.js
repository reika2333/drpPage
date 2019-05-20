import fetch from './fetch.js'

// 作品详情
export function worksDetail(id){
    return fetch({
        url: '/showRecommendWorksDetails',
        method: 'post',
        data: {
            works_id: id
        }
    })
}
// 搜索全部
export function findPage(data){
    return fetch({
        url: '',
        method: 'post',
        data: {
            works_id: data
        }
    })
}
// 搜索图片
export function findPagePic(data){
    return fetch({
        url: '',
        method: 'post',
        data: {
            works_id: data
        }
    })
}
// 搜索音乐
export function findPageMusic(data){
    return fetch({
        url: '',
        method: 'post',
        data: {
            works_id: data
        }
    })
}
// 搜索视频
export function findPageVideo(data){
    return fetch({
        url: '',
        method: 'post',
        data: {
            works_id: data
        }
    })
}
// 搜索文章
export function findPageIssue(data){
    return fetch({
        url: '',
        method: 'post',
        data: {
            works_id: data
        }
    })
}
