//GetPlayerSummaries.json
$.ajax({
   url: "https://raw.githubusercontent.com/MalikSteam/account_public/main/public/webapi/GetPlayerSummaries.json",
	type:"get",
	dataType: 'text',  
	error: function(data){
	//debugger;
	  //alert('err');
	},
	success:function(data) {
	  var data = JSON.parse( data );
	  var gpsjson_personaname = data.response.players[0].personaname;
	  $( ".gpsjson_personaname" ).append( gpsjson_personaname );
	  $( "title" ).append( gpsjson_personaname );
	  
	  var gpsjson_avatar = data.response.players[0].avatar;
	  $( ".gpsjson_avatar" ).attr("src", gpsjson_avatar);
	  
	  var gpsjson_avatarmedium = data.response.players[0].avatarmedium;
	  $( ".gpsjson_avatarmedium" ).attr("src", gpsjson_avatarmedium);
	  
	  var gpsjson_avatarfull = data.response.players[0].avatarfull;
	  $( ".gpsjson_avatarfull" ).attr("src", gpsjson_avatarfull);
	  
	  var gpsjson_profileurl = data.response.players[0].profileurl;
	  $( ".gpsjson_profileurl" ).attr("href", gpsjson_profileurl);
	  
	  var gpsjson_timecreated = data.response.players[0].timecreated;
	  $( ".gpsjson_timecreated" ).append("timecreated:<br>" + gpsjson_timecreated);
	  
	  //var gpsjson_personaname = data.response.players[0].personaname;
	  //$( ".gpsjson_personaname" ).append( gpsjson_personaname );
	  
		//"communityvisibilitystate": 3,
		//"profilestate": 1,
		//"personaname": "PCGameit",
		//"commentpermission": 1,

		//"personastate": 1,
		//"primaryclanid": "103582791429521408",
		//"personastateflags": 0

	}
});