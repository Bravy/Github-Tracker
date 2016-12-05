import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'github':function(){
    var GITHUB = Npm.require("github"); 
    var github = new GITHUB();
    issues = github.getAll({
      owner:'bravysandhu',
      repo:'Github-Tracker'
    })
    return issues;
  }
});
