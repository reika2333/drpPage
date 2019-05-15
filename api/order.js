import fetch from './fetch.js'

/*
* 所有订单接口的调用
* 等有了接口文档再修改
* */

// 购买-提交订单
export function newOrder(data) {
    return fetch({
        url: '',
        method: 'post',
        data: data
    })
}
// 购买-查看订单
export function infoOrderById(id) {
    return fetch({
        url: '?id=' + id,
        method: 'get'
    })
}
// 购买-删除订单
export function deleteOrderById(id) {
    return fetch({
        url: '/' + id,
        method: 'delete'
    })
}
// 购买-修改订单
export function updateOrderById(data) {
    return fetch({
        url: '',
        method: 'post',
        data: data
    })
}

// 购买-查询我的订单
export function findPage() {

}
