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
