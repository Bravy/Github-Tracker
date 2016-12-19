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
