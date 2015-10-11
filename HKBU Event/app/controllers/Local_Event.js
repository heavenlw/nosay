var args = arguments[0] || {};
var fid=args.fid||{};
Alloy.Collections.detail.fetch();

$.local_event.title = fid;

$.local_event.addEventListener("close",function(){$.destroy();});


function locationFunction(collection)
{
	console.log("tst");
	console.log("locationfunction");  //why 2 times load after start this function?
	return collection.where({venue:fid});
}

function LocationClick(e)
{
	 var eventListController=Alloy.createController('Detail_Page',{fid:e.row.fid});
	 Alloy.Globals.tabGroup.getActiveTab().open(eventListController.getView());
}