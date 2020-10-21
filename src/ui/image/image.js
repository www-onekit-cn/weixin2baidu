/* eslint-disable camelcase */


Component({
  options: {
    addGlobalClass: true,
    virtualHost: true
  },

  properties: {
    onekitId: {type: String, value: ''},
    onekitClass: {type: String, value: ''},
    onekitStyle: {type: String, value: ''},
    src: {
      type: String,
      value: '',
    },
    mode: {
      type: String,
      value: 'scaleToFill',
    },
    webp: {
      type: Boolean,
      value: false,
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
  },
  data: {new_size: ''},
  methods: {
    image_error(e) {
      this.triggerEvent('error', e)
    },
    image_load(e) {
      const that = this
      const SIZE = e.detail
      switch (this.properties.mode) {
        case 'heightFix':
          swan.createSelectorQuery()
            .in(this)
            .select('.onekit-image')
            .boundingClientRect(res => {
              const mode = 'scaleToFill'
              const baidu_height = res.height
              const baidu_width = SIZE.width * baidu_height / SIZE.height
              const new_size = `width:${baidu_width}px;height:${baidu_height}px;`
              that.setData({mode, new_size})
            })
            .exec()
          break
        default:
          break
      }
    },
  },
  lifetimes: {
  },
})
