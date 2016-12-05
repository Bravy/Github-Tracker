//timer functions
Template.taskData.helpers({
  'complete': function(){
  postId = this._id;
  console.log(postId);
  return Tasks.findOne(postId).complete;
  },
  'hrs': function(){
    postId = this._id;
    return Tasks.findOne(postId).hours;
  },
  'min':function(){
      postId = this._id;
      return Tasks.findOne(postId).minutes;
  },
  'sec': function(){
      postId = this._id;
      return Tasks.findOne(postId).seconds;
  }
});
Template.taskList.helpers({
  tasks()
    {
      var owner = Meteor.userId();
      return Tasks.find({ owner: owner}, {sort:{ createdAt:-1 }});
    },
});

Template.taskList.events({
  'submit .new-task'(event) {
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;
    const id = this._id;
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
      complete: false,
      hours: "00",
      minutes: "00",
      seconds: "00"
    });

    target.text.value = '';
  },

  'click .delete'(){
    Tasks.remove(this._id);
	},
});
