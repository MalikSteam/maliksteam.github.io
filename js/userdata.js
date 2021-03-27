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
	}
});