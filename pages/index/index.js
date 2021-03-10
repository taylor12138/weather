// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['广东省','东莞市','道滘镇'],
    now:''
  },

  changeRegion:function(e){
    this.setData({
      region:e.detail.value
    })
    this.GetWeather();//更新天气
  },

  GetWeather:function(){
    var that=this;//this 不可以再wxAPI函数内部使用
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location: that.data.region[1],
        key:'1bf803f710d4410ba64b0f202ebd731c'
      },
      success:function(res){
        //console.log(res.data)
        that.setData({now:res.data.HeWeather6[0].now})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.GetWeather();
  },

 
})