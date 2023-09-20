// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: wx.getStorageSync('cart') || [],
    checkedAll: false,//全选按钮的状态
    total: 0,//存放总价格 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTotal()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  numjian(e) {

    let index = e.currentTarget.dataset.index
    this.data.cartList[index].num--
    console.log(this.data.cartList[index].num);
    this.setData({
      cartList: this.data.cartList
    })
  },
  numjia(e) {
    let index = e.currentTarget.dataset.index
    this.data.cartList[index].num++
    console.log(this.data.cartList[index].num);
    this.setData({
      cartList: this.data.cartList
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  // 点击全选按钮的事件
  selectAll() {
    // 手动取反
    this.data.checkedAll = !this.data.checkedAll
    console.log(this.data.checkedAll)
    // 把全选按钮的状态赋值给循环遍历的每一个
    this.data.cartList.forEach(item => {
      item.status = this.data.checkedAll
    })
    this.setData({
      cartList: this.data.cartList,
      checkedAll: this.data.checkedAll,
      total: 0
    })
    this.getTotal()
    console.log(this.data.checkedAll);
  },
  // 反选
  checkes(e) {
    let index = e.currentTarget.dataset.index

    // 把当前点击的这一条数据的状态取反
    this.data.cartList[index].status = !this.data.cartList[index].status
    this.data.checkedAll = this.data.cartList.every(item => item.status == true)
    this.setData({
      cartList: this.data.cartList,
      checkedAll: this.data.checkedAll,
      total: 0
    })
    this.getTotal()

  },

  // 删除所选
  selectDel() {
    this.data.cartList = this.data.cartList.filter(item => item.status == false)
    this.setData({
      cartList: this.data.cartList
    })
    wx.setStorageSync('cart', this.data.cartList)
    this.setData({
      total: 0
    })
    this.getTotal()
  },
  // 获取总价格的方法
  getTotal() {
    this.data.cartList.forEach(item => {
      if (item.status) {
        this.data.total += item.price * item.num
      }
    })
    this.setData({
      total: this.data.total
    })

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