import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-github';
Template.body.helpers({
  tasks()
    {
	return Tasks.find({}, {sort:{ createdAt: -1}}); 
    },
});

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
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
});


