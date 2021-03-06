// import wx from '../../../wx'

/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../../behavior/onekit_behavior'
import wxs_behavior from '../../../behavior/wxs_behavior'
import weixin_behavior from '../../../behavior/weixin_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, weixin_behavior],
  options: {
    addGlobalClass: true,
  },
  data: {},
  properties: {
    type: {
      type: String,
      value: ''
    },
    openGid: {
      type: String,
      value: ''
    },
    lang: {
      type: String,
      value: ''
    },
    defaultText: {
      type: String,
      value: ''
    },
  },

  attached() {
    // const that = this
    // wx.getOpenData({
    //   success(opendata) {
    //     switch (that.properties.type) {
    //       case 'groupName':
    //         that.setData({groupName: opendata.nickName})
    //         break
    //       case 'userNickName':
    //         that.setData({userNickName: opendata.nickName})
    //         break
    //       case 'userAvatarUrl':
    //         that.setData({userAvatarUrl: opendata.avatarUrl})
    //         break
    //       case 'userGender':
    //         that.setData({userGender: opendata.gender})
    //         break
    //       case 'userCity':
    //         that.setData({userCity: opendata.city})
    //         break
    //       case 'userProvince':
    //         that.setData({userProvince: opendata.province})
    //         break
    //       case 'userCountry':
    //         that.setData({userCountry: opendata.country})
    //         break
    //       case 'userLanguage':
    //         that.setData({userLanguage: opendata.language})
    //         break
    //       default:
    //         break
    //     }
    //   }
    // })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    _trigger_error(e) {
      console.warn('暂不支持!')
      this.triggerEvent('Error', e.detail)
    },
  },
})
