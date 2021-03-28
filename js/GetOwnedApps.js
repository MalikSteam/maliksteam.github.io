//GetOwnedApps.json
$.ajax({
   url: "https://raw.githubusercontent.com/MalikSteam/account_public/main/private/GetOwnedApps.json",
	type:"get",
	dataType: 'text',  
	error: function(data){
	//debugger;
	  //alert('err');
	},
	success:function(data) {
		var data = JSON.parse( data );

		var goajson_appid_name="";
		$.each(data, function(key,value) {
		  goajson_appid_name = goajson_appid_name.concat("<tr><td>" + value.appid +"</td><td>"+ value.name +"</td></tr>");
		});
		$( ".goajson_appid_name" ).append( goajson_appid_name );
		$( ".gamescount_GetOwnedApps" ).append( "GetOwnedApps <br>" + data.length );
		$('#GetOwnedApps_table').DataTable();
	}
});