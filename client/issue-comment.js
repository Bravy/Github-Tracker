Template.issueComment.created = function(){
  this.issueComment = new ReactiveVar("");
}
Template.issueComment.helpers({
   'comments': function(){
        var self = Template.instance()
        if(Template.instance().issueComment.get() == ""){
          repo = FlowRouter.current().params.repo;
          number = FlowRouter.current().params.number;
	   Meteor.call("getComment",repo,number , function(err, comments){
		if(err){ console.log(err) }
		else{
			self.issueComment.set(comments);
    		}
	    });
         }
	return self.issueComment.get();
}
});
