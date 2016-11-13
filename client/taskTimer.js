seconds = 0, minutes = 0, hours = 0
var add = function() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  $('#time').html((hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds));
  timer();
}

var timer = function() {
  t = setTimeout( add, 1000);
}

Template.taskTimer.events({
  'click .start' : function(){
    timer();
  },

  'click .stop': function() {
    clearTimeout(t);
    var time = $('#time').html();
    timeArray= time.split(':');
    hours = timeArray[0];
    minutes = timeArray[1];
    seconds= timeArray[2];
    postId = $('#post').html();
    console.log(postId);

    Tasks.update(
      {_id: postId },
      {$set:{hours: hours }},
      {$set:{minutes: minutes}},
      {$set:{seconds: seconds}},
    );
    console.log(hours);
   },

 'click .clear' : function(){
   $('#time').html("00:00:00");
   clearTimeout(t);
   seconds = 0; minutes = 0; hours = 0;
  }
});
