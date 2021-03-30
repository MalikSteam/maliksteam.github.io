//AllGamesTab.xml
$(document).ready(function(){
  $.ajax({
    type: "GET",
	url: "https://raw.githubusercontent.com/MalikSteam/account_public/main/public/xml/AllGamesTab.xml",
    dataType: "xml",
    success: function(xml) {
		$( ".gamescount_AllGamesTab" ).append( "AllGamesTab <br>" + $(xml).find("game").length );

		var agtxml_appid_name=""; 
        $(xml).find('game').each(function(){
			var $game=$(this);
			var $appid = $game.find("appID");
			var $name = $game.find("name");
			agtxml_appid_name = agtxml_appid_name.concat("<tr><td>" + $appid.text() + "</td><td>"+ $name.text() +"</td></tr>");
		});
		$( ".agtxml_appid_name" ).append( agtxml_appid_name );
		$('#AllGamesTab_table').DataTable();
		$("#AllGamesTab_table_wrapper > div:nth-child(3) > div.col-sm-12.col-md-5").hide();
    },
    error: function() {
        console.log("AllGamesTab.xml Error");
    }
  });
});