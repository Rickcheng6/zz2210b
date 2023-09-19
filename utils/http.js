import http from './request'

// 获取分类
export const getcategoryNavApi = (params) => http.get('/category/categoryNav?id=1005000', params)
export const getcateDetailApi = (params) => http.get('/goods/goodsList?categoryId=' + params)
export const getGoodsApi = (params) => http.get('/goods/detailaction', params)


