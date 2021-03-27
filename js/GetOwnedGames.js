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
	}
});