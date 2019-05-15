// import Vue from 'vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

var baseUrl = ''

export default function (config) {
    if(config.method === 'post'){
        return this.$http.post(baseUrl + config.url,config.data)
    }else if(config.method === 'get'){
        return this.$http.get(baseUrl + config.url)
    }else if(config.method === 'put'){
        return this.$http.put(baseUrl + config.url,config.data)
    }else if(config.method === 'delete'){
        return this.$http.delete(baseUrl + config.url)
    }
}
