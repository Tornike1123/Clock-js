setInterval(displayclock, 500);
function displayclock(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let en = 'AM';

    
    if(hrs > 12) {
        hrs -= 12;
        en = 'PM';
    }
    if(hrs == 0){
        hrs = 12;
    }


    document.getElementById('time').innerHTML = hrs + ':' + min + ':' + sec + ' ' + en;
}

