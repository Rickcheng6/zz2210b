// pages/detail/detail.js
import { getGoodsApi } from '../../utils/http'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ids: 0,
        LbList: [],
        shopsDetail: {},
        cartList: wx.getStorageSync('cart') || []
    },
    addCart() {
        let obj = {
            goods_brief: this.data.shopsDetail.name,
            num: 1,
            primary_product_id: this.data.shopsDetail.primary_product_id,
            price: this.data.shopsDetail.retail_price,
            status: false,
            id: this.data.shopsDetail.id,
            list_pic_url: this.data.shopsDetail.list_pic_url
        }
        let objItem = this.data.cartList.find(item => item.id == obj.id)
        if (objItem) {
            objItem.num++
        } else {
            this.data.cartList.push(obj)
            this.setData({
                cartList: this.data.cartList
            })
        }
        wx.setStorageSync('cart', this.data.cartList)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // getGoodsApi(options.detail)
        getGoodsApi({ id: options.id, openId: 123 }).then(res => {
            console.log(res.data.info);
            this.setData({
                LbList: res.data.gallery,
                shopsDetail: res.data.info
            })
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})