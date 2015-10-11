var args = arguments[0] || {};
var fid=args.fid||{};
Alloy.Collections.detail.fetch();

$.win.title=fid;
$.win.addEventListener("close",function(){$.destroy();});

function filterFunction(collection){
	return collection.where({organizer:fid});
} 


function eventClick(e){
		
	 var eventListController=Alloy.createController('Detail_Page',{fid:e.row.eid});
	 Alloy.Globals.tabGroup.getActiveTab().open(eventListController.getView());
}
