import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-github';

//timer functions
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


Template.taskList.helpers({
  tasks()
    {
      return Tasks.find({}, {sort:{ createdAt: -1}});
    },
});

Template.taskList.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
     const target = event.target;
     const text = target.text.value;
     const id = this._id;

    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,

   });

    // Clear form
   target.text.value = '';
  },

'click .delete'(){
	  Tasks.remove(this._id);
	},
});

Template.tasktimer.events({
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
