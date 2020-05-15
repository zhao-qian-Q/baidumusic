import http from './http.js'

// 获取首页的榜单列表
 export function getTodayMusicList(type=1,size=6,offset=0){
    const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`
    // debugger
    return http.get(url)
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
// 获取歌曲详情
export function getMusicDetail(singid){
    const url = `/lrc/v1/restserver/ting?method=baidu.ting.song.playAAC&songid=${singid}&from=web`;
    return http.get(url)
}
// 获取歌词
export function getLyric(lrclink){
    const url = `/arc/data/song/lrc?lrc_link=${lrclink}`;
    // debugger
    return http.get(url)

}