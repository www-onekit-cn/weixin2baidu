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
  properties: {
    openid: {
      type: String,
      value: ''
    },
    // 做不了
    mode: {
      type: String,
      value: ''
    },
    devicePosition: {
      type: String,
      value: 'front'
    },
  },
  attached() {},

  methods: {
    voipRoom_error() {
      this.triggerEvent('Error')
    },
  }
})
