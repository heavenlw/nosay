$.index.open();

Alloy.Collections.Venue.fetch();
Alloy.Collections.detail.fetch();
Alloy.Globals.tabGroup = $.index;
var lastCampus;
function tableClick(e) {
	var eventListController = Alloy.createController('eventList', {
		fid : e.row.fid
	});
	$.eventTab.open(eventListController.getView());
};

function transformFunction(model) {
	var transform = model.toJSON();
	if (transform.image == null)
		transform.image = "";
	return transform;
}

function locationClick(e) {
	var eventListController = Alloy.createController('Local_Event', {
		fid : e.row.fid
	});
	//console.log(e.row.fid);
	$.LocalTab.open(eventListController.getView());
};

function transform(model) {
	var transform = model.toJSON();
	transform.title = transform.VenueID;
	transform.subtitle = transform.VenueName;
	transform.rightButton=Titanium.UI.iPhone.SystemButton.DISCLOSURE; //add the right button to click
    return transform;
}

function eventClick(e) {

	var eventListController = Alloy.createController('Detail_Page', {
		fid : e.row.eid
	});
	Alloy.Globals.tabGroup.getActiveTab().open(eventListController.getView());
}

function group(model) {
	var transform = model.toJSON();

	if (lastCampus == transform.CampusID) {
		transform.SubTitle = "";
	} else {
		transform.SubTitle = transform.CampusID;
		lastCampus = transform.CampusID;
	}
	return transform;
}
function mapClicked(e)

{
	if(e.clicksource=='rightButton')
	 {
	 	var eventListController=Alloy.createController('Local_Event',{fid:e.annotation.title});
	 $.locationTab.open(eventListController.getView());
	 }
}
function Tab5Click(e)
{
   console.log("Tab5Click");	
}

