Tasks = new Meteor.Collection('tasks');

Tasks.allow({
  insert() {return true;},
  update() {return true;},
  remove() {return true;}
});

Tasks.deny({
  insert() {return false;},
  update() {return false;},
  remove() {return false;}
});
