var args = arguments[0] || {};
var fid=args.VenueId||{};
Alloy.Collections.Venue.fetch();

function locationFilter(collection)
{
	console.log("locationFilter");
	console.log(fid);
	return collection.where({VenueID:fid});
}

function transform(model)
{
	var transform=model.toJSON();
	transform.title=transform.VenueID;
	transform.subtitle=transform.VenueName;
	return transform;
}