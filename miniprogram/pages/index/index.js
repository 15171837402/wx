//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    urlList:[],
  },

  onLoad: function() {
    // if (!wx.cloud) {
    //   wx.redirectTo({
    //     url: '../chooseLib/chooseLib',
    //   })
    //   return
    // }
    this.getTestMethod()
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true,
    //   })
    // }
  },
  getTestMethod(){
    const db=wx.cloud.database()
    db.collection('clip_users').get({
      success:res=>{
        console.log(res);
        this.setData({
          urlList:res.data
        })
      }
    })
  },
  addData(){
    wx.navigateTo({
      url:'/pages/addData/addData'
    })
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    })
  }
})
