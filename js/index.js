
let vm = new Vue({
    el:"#app",
    data:{
        query: "",
        songs: [],
        music: "",
        comments: [],
        pic: "./images/cover.png",
        isPlay: false,
        mv: "",
        isplaymv: false
    },
    methods:{
        searchMusic(){
            axios.get("https://autumnfish.cn/search?keywords="+this.query).then(
                res=>{
                    console.log(res.data.result.songs);
                    this.songs = res.data.result.songs;
                },
                err=>console.log(err)
            )
        },

        playmv(mvid){
            this.isplaymv = true;
            console.log(mvid);
            axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(
                res=>{
                    // console.log(res.data.data.url);
                    this.mv = res.data.data.url;
                },
                err=>console.log(err)
                
            )
        },

        closemv(){
            this.isplaymv = false;
        },

        pause(){
            this.isPlay = false;
        },
        play(){
            this.isPlay = true;
        },

        playMusic(id){
            this.isPlay = true;
            // console.log(id);
            // 歌曲地址
            axios.get("https://autumnfish.cn/song/url?id="+id).then(
                res=>{
                    // console.log(res.data.data[0].url);
                    this.music = res.data.data[0].url;
                    
                },
                err=>console.log(err)
                
            )

            // 歌曲信息
            axios.get("https://autumnfish.cn/song/detail?ids="+id).then(
                res=>{
                    // console.log(res.data.songs[0].al.picUrl); 
                    this.pic = res.data.songs[0].al.picUrl;
                    
                },
                err=>console.log(err)
                
            )

            //歌曲评论
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+id).then(
                res=>{
                    // console.log(res.data.hotComments);
                    this.comments = res.data.hotComments;
                    
                },
                err=>console.log(err)
                
            )

        }
    },
})