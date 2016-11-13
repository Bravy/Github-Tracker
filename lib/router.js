FlowRouter.route('/',{
	action: function(){
		BlazeLayout.render("taskList");
		console.log("kuch bhi");
	}
});



FlowRouter.route('/tasktimer/:postId/:text',{
	action: function(timer){
		BlazeLayout.render("tasktimer",timer);
	}
});
