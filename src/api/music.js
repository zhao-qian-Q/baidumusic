import http from './http.js'

// 获取首页的榜单列表(百度接口)
//  export function getTodayMusicList(type=1,size=6,offset=0){
//     const url = `/wy-api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`
//     // debugger
//     return http.get(url)
// }

// // 获取首页的榜单列表（网易接口）
 export function getTodayMusicList(type=1,size=6,offset=0){
    const url = `/wy-api/top/list?idx=${type}`
    // debugger
    return http.get(url).then(
        res=>{
            return {
                song_list : res.playlist.tracks.map(item=>{
                    return {
                        song_id : item.id,
                        pic_huge : item.al.picUrl,
                        title : item.name,
                        pic_small: item.al.picUrl,
                        artist_id:item.id
                    }
                }).splice(0,size),
                billboard : res.playlist


            }
        }
    )
}

// 获取歌手列表
export function getSingerList(tingid){
    const url = `/api/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=${tingid}`;
    return http.get(url)
}
// 获取歌手歌曲列表
export function getSingerSongsList(tingid,limits=10){
    const url = `/api/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=${tingid}&limits=${limits}`;
    return http.get(url)
}
// 搜索地址
export function search(query){
    const url = `/api/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=${query}`;
    return http.get(url)
}
// 获取歌曲详情（百度原生接口）
// export function getMusicDetail(singid){
//     const url = `/lrc/v1/restserver/ting?method=baidu.ting.song.playAAC&songid=${singid}&from=web`;
//     return http.get(url)
// }

// 获取歌曲详情（网易接口）
export function getMusicDetail(singid){
    const url = `/wy-api/song/detail?ids=${singid}`;
    // return http.get(url).then(res=>{
    //     //   debugger
    //     return {
            
    //         songinfo:res.songs[0].map(item=>{
    //             return {
    //                 title:item.name,
    //                 author:item.ar.name,
    //                 pic_radio:item.al.picUrl,
    //             }
    //         })

    //     }
    // })
    return http.get(url)
}


// 获取歌词
// export function getLyric(lrclink){
//     const url = `/arc/data/song/lrc?lrc_link=${lrclink}`;
//     // debugger
//     return http.get(url)

// }

// 获取歌词（网易）
export function getLyric(songid){
    const url = `/wy-api/lyric?id=${songid}`;

    return http.get(url).then(
        res=>{
            // debugger
            return {
                content: res.lrc.lyric
              
            }
        }
    )

}


// 获取歌曲播放地址(网易)
export function getSongPlay(singid){
    const url = `/wy-api/song/url?id=${singid}`;
    // debugger
    return http.get(url)

}



