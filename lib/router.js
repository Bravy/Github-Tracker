FlowRouter.route('/',{
	action: function(){
		BlazeLayout.render("taskList");
		console.log("kuch bhi");
	}
});



FlowRouter.route('/tasktimer/:postId',{
	action: function(timer){
		BlazeLayout.render("taskTimer",timer);
	}
});
