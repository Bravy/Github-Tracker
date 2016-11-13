import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-github';

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
    });

    target.text.value = '';
  },

  'click .delete'(){
    Tasks.remove(this._id);
	},
});
