Component({
options: {
        addGlobalClass: true,
    },
    properties: {     onekitId:{type:String,value:""},
        onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
        src: {
            type: String, 
            value: "",
        },
        loop: {
            type: Boolean, 
            value: false,
        },
        controls: {
            type: Boolean, 
            value: false,
        },
        poster: {
            type: String, 
            value: "",
        },
        name: {
            type: String, 
            value: "未知音频",
        },
        author: {
            type: String, 
            value: "未知作者",
        },
    },

    methods: {
       audio_play(e){
        this.triggerEvent('play',e)
       },
       audio_pause(e){
        this.triggerEvent("pause",e)
       },
       audio_timeupdate(e){
        this.triggerEvent("timeupdate",e)
       },
       audio_ended(e){
        this.triggerEvent("ended",e)
       },
       audio_error(e){
        console.log("audio  error! ",e)
        this.triggerEvent("error",e)
       },
    }
});