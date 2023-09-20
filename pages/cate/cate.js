// pages/cate/cate.js
import { getcategoryNavApi, getcateDetailApi, getGoodsApi } from '../../utils/http'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navList: [],
        active: 0,
        categoryId: 0,
        rightList: [],
        obj: {
            openId: 0,
            id: 0
        }
    },
    getNavList() {
        getcategoryNavApi().then(res => {
            console.log(res.data.navData);
            this.setData({
                navList: res.data.navData,
                active: res.data.navData[0].id
            })
            this.getCateDetail()
        })
    },
    // 获取分类详情
    getCateDetail() {
        getcateDetailApi(this.data.active).then(res => {
            this.setData({
                rightList: res.data.data
            })
            console.log(this.data.rightList);
            wx.hideLoading()
        })
    },
    changeTab(e) {
        wx.showLoading({
            title: '正在加载中...',
        })
        let { id } = e.currentTarget.dataset.id
        this.setData({
            active: e.currentTarget.dataset.id
        })
        this.getCateDetail()
    },
    // 跳转详情页
    tz(e) {
        let { id } = e.currentTarget.dataset
        wx.navigateTo({
            url: '/pages/detail/detail?id=' + id,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getNavList()
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