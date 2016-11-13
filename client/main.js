//timer functions

Template.taskList.helpers({
  tasks()
    {
      return Tasks.find({}, {sort:{ createdAt: -1}});
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
