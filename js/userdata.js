//userdata.json
$.ajax({
   url: "https://raw.githubusercontent.com/MalikSteam/account_public/main/private/userdata.json",
	type:"get",
	dataType: 'text',  
	error: function(data){
	//debugger;
	  //alert('err');
	},
	success:function(data) {
		var data = JSON.parse( data );
		$( ".gamescount_userdata_apps" ).append( "userdata OwnedApps <br>" + data.rgOwnedApps.length );
		$( ".gamescount_userdata_packages" ).append( "userdata OwnedPackages <br>" + data.rgOwnedPackages.length );
		
		var rgOwnedAppsJson="";
		$.each(data.rgOwnedApps, function(key,value) {
		  rgOwnedAppsJson = rgOwnedAppsJson.concat("<tr><td>" + value +"</td></tr>");
		});
		
		$( ".UDrgOwnedApps" ).append( rgOwnedAppsJson );
		$('#UDrgOwnedApps_table').DataTable();
		$("#UDrgOwnedApps_table_wrapper > div:nth-child(3) > div.col-sm-12.col-md-5").hide();
	}
});