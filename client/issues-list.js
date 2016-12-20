Template.issueList.created = function(){
  this.issueList = new ReactiveVar("");
}
Template.issueList.helpers({
   'issues': function(){
        var self = Template.instance()
        if(Template.instance().issueList.get() == ""){
          repo = FlowRouter.current().params.repo;
	   Meteor.call("getIssues",repo, function(err, issues){
		if(err){ console.log(err) }
		else{
		   console.log(issues);
		   self.issueList.set(issues);
		}
	   });
        }
	console.log( Template.instance().issueList.get());
	return Template.instance().issueList.get();
    }
});

Template.issueList.events({
  'submit .new-issue': function(event){
    event.preventDefault();
    var self = Template.instance()
    if(Template.instance().issueList.get() == ""){
    repo = FlowRouter.current().params.repo;
    title = $('.issueTitle').val();
    Meteor.call('addIssue', repo, title,function(err, newIssue){
   if(err){ console.log(err) }
   else{
      console.log("this is returned from method",newIssue);
      self.issueList.set(newIssue);
    }
  });
}
}
});
