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

Template.timer.events({
  'click .start' : function(){
    timer();
      $('.start').prop('disabled', true);
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
    $('.start').prop('disabled', false);
   },

 'click .clear' : function(){
   $('#time')[0].textContent = "00:00:00";
   clearTimeout(t);
   seconds = 0; minutes = 0; hours = 0;
   $('.start').prop('disabled', false);
  },

'click .complete': function(event){
  event.preventDefault();
  seconds = 0; minutes = 0; hours = 0;
  repo = FlowRouter.current().params.repo;
  number = FlowRouter.current().params.number;
  body = "Took "+timeArray+ " to complete this issue";
  console.log(body);
   Meteor.call("commentTime",repo ,number, body);
   FlowRouter.go('/');
}

});
