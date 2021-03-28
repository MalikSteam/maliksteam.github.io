//GetOwnedGames.json
$.ajax({
   url: "https://raw.githubusercontent.com/MalikSteam/account_public/main/public/webapi/GetOwnedGames.json",
	type:"get",
	dataType: 'text',  
	error: function(data){
	//debugger;
	  //alert('err');
	},
	success:function(data) {
		var data = JSON.parse( data );
		$( ".gamescount_GetOwnedGames" ).append( "GetOwnedGames <br>" + data.response.game_count );
		
		var gogjson_appid_name="";
		$.each(data.response.games, function(key,value) {
		  gogjson_appid_name = gogjson_appid_name.concat("<tr><td>" + value.appid +"</td><td>"+ value.name +"</td></tr>");
		});
		$( ".gogjson_appid_name" ).append( gogjson_appid_name );
		$('#GetOwnedGames_table').DataTable();
	}
});