$('#video1').one('loadeddata', function() {
    // 暂停，但下载还在继续
    var $video1 = $(this).get(0);
    $video1.pause();
    $('#cp-round').show();

    // 启动定时器检测视频下载进度
    var timer = setInterval(function() {
        var end = getEnd($video1),
            duration = $video1.duration;
        if(end < duration) {
            return
        }
        clearInterval(timer)
    }, 1000)


    console.log(localStorage.getItem('video'));
    if(localStorage.getItem('video')){
        $video1.currentTime = localStorage.getItem('video');
    }else{
        $video1.currentTime = 0;
    }

    $video1.volume = 0.5;
    $('#cp-round').hide();

    console.log($video1.paused);
    var videoTimerEnd = setInterval(function() {
        var videoTime = $video1.currentTime;
        localStorage.setItem('video',videoTime);
        console.log(localStorage.getItem('video'));
        return;
        //if(!$video1.paused) {
        //    var videoTime = $video1.currentTime;
        //    localStorage.setItem('video',videoTime);
        //    console.log(localStorage.getItem('video'));
        //    return;
        //}
        clearInterval(videoTimerEnd);
    }, 1000)


})

function getEnd(video) {
    var end = 0
    try {
        end = video.buffered.end(0) || 0
        end = parseInt(end * 1000 + 1) / 1000
    } catch(e) {

    }
    return end
}
function playPause(obj) {
    var $video1 = $('#video1').get(0);
    if ($video1.paused){
        $video1.play();
        $(obj).find('i').removeClass('fa-pause').addClass('fa-play');
    }else{
        $video1.pause();
        $(obj).find('i').removeClass('fa-play').addClass('fa-pause');
    }
}
function volume(value){
    var $video1 = $('#video1').get(0);
    var vol = $video1.volume;
    vol += value;
    if (vol >= 0 && vol <= 1) {
        $video1.volume = vol;
    } else {
        $video1.volume = (vol < 0) ? 0 : 1;
    }
}
//function currentTime(){
//    var $video1 = $('#video1').get(0);
//    console.log($video1.currentTime);
//}
//setInterval(currentTime, 1000);
//var $video1 = $('#video1').get(0);
//$video1.currentTime = 5;

//var timer = setInterval(function() {
//    var $video1 = $('#video1').get(0);
//
//    clearInterval(timer)
//}, 10000)