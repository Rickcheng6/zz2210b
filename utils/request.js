
const request = (url, method, params) => {
    let baseUrl = 'http://shop.bufantec.com/bufan'
    return new Promise((resolve, reject) => {

        wx.request({
            url: baseUrl + url,
            method: method,
            data: params ? params : {},
            success: (res) => {
                resolve(res)
            }
        })
    })
}
let api = {
    get: (url, params) => request(url, "GET", params),
    post: (url, params) => request(url, "POST", params)
}
export default api