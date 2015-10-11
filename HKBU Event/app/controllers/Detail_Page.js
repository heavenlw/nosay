var args = arguments[0] || {};
var fid=args.fid ||{};

Alloy.Collections.detail.fetch();
var select_event_id;


function macthFunction(collection){
	select_event_id = fid;
return collection.where({id:fid});}


function AddressShow(e)
{   
	console.log("AddressShow");
	var eventListController=Alloy.createController('Map_View',{VenueId:e.source.venue_id});  
	//alert(e.source);
	Alloy.Globals.tabGroup.getActiveTab().open(eventListController.getView());
}

function ShowMessage(e)
{
	console.log("event_id="+ select_event_id);
	 $.dialog.show();
}
function doClick(e){
	console.log(e.index);
	if(e.index == 0)
	{
        alert("Event successfully registered.");
   }
   else
   {
   	alert("Quota full.");
   }
};