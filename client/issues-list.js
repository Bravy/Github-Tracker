Template.issueList.created = function(){
  this.issueList = new ReactiveVar("");
}
Template.issueList.helpers({
  'repo':function(){
     repo = FlowRouter.current().params.repo;
     return repo;
  },
   'issues': function(){
        var self = Template.instance()
        if(Template.instance().issueList.get() == ""){
          repo = FlowRouter.current().params.repo;
	   Meteor.call("getIssues",repo, function(err, issues){
		if(err){ console.log(err) }
		else{
                   if(issues){
		   console.log(issues);
		   self.issueList.set(issues);
                   } else {
		   self.issueList.set("no issues");
                   }
		}
	   });
        }
	issues =  Template.instance().issueList.get();
        if(issues == "no issues") {
            console.log(issues);
        } else {
	   return Template.instance().issueList.get();
       }
    },

    'loggingIn':function() {
	return Meteor.loggingIn();
     }
});

Template.issueList.events({
  'submit .new-issue': function(event){
    event.preventDefault();
    repo = FlowRouter.current().params.repo;
    title = $('.issueTitle').val();
    Meteor.call('addIssue', repo, title);
}
});
