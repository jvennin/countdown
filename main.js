jQuery(function($){
    var event = new Date(2018,09,12,00,00,00);
    var days = $('#days');
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');

    setDate();

    function setDate(){
        var now = new Date();
        console.log('launch.getime =' + event.getTime());
        console.log('now.getTime =' + now.getTime());
        console.log('now.getTimezoneOffset =' + now.getTimezoneOffset());
        var s = ((now.getTime() - event.getTime()) / 1000) - now.getTimezoneOffset() * 60;
        console.log('s=' + s);
        var x = s / 84600;
        console.log('x =' + s);
        var d = Math.floor(s/86400); //nbr de seconde en 24h
        console.log('d=' + d);
        days.html('<strong>'+d+'</strong>Jour'+(d>1?'s':''));
        s -= d * 86400;
        console.log(d);
        
        var h = Math.floor(s / 3600);
        hours.html('<strong>' + h + '</strong> Heure' + (h > 1 ? 's' : ''));
        s -= h * 3600;
        
        var m = Math.floor(s / 60);
        minutes.html('<strong>' + m + '</strong> Minute' + (m > 1 ? 's' : ''));
        s -= m * 60;

        var s = Math.floor(s);
        seconds.html('<strong>' + s + '</strong> Seconde' + (s > 1 ? 's' : ''));

        setTimeout(setDate,1000);

    }
});
