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

  $('#time')[0].textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
 timer();
}

var timer = function() {
  t = setTimeout( add, 1000);
}

Template.taskTimer.helpers({
   'text': function(){
    postId = FlowRouter.getParam("postId");
    console.log(postId);
    task = Tasks.findOne(postId);
    console.log("seconds  " + task);
    return task.text;
    },
   'seconds': function(){
    postId = FlowRouter.getParam("postId");
    console.log(postId);
    task = Tasks.findOne(postId);
    console.log("seconds  " + task);
    return task.seconds;
    },

   'minutes': function(){
    postId = FlowRouter.getParam("postId");
    console.log(postId);
    task = Tasks.findOne(postId);
    console.log("seconds  " + task);
    return task.minutes;
    },
   'hours': function(){
    postId = FlowRouter.getParam("postId");
    console.log(postId);
    task = Tasks.findOne(postId);
    console.log("seconds  " + task);
    return task.hours;
    }
});

Template.taskTimer.events({
  'click .start' : function(){
    timer();
  },

  'click .stop': function() {
    clearTimeout(t);
    var time = $('#time')[0].textContent;
    timeArray= time.split(':');
    console.log(timeArray);
    ho = timeArray[0];
    console.log(ho);
    min = timeArray[1];
    sec= timeArray[2];
    postId = $.trim($('#post').text());
    console.log(postId);
    Tasks.update(postId,{$set:{hours:ho,minutes:min,seconds:sec}});
   },

 'click .clear' : function(){
   $('#time')[0].textContent = "00:00:00";
   clearTimeout(t);
   seconds = 0; minutes = 0; hours = 0;
  },

'click .complete': function(){
  seconds = 0; minutes = 0; hours = 0;
   postId = FlowRouter.getParam("postId");
   Tasks.update(postId,{$set:{complete:"true"}});
   FlowRouter.go('/');
}

});
