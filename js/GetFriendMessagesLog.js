//GetFriendMessagesLog.json
$.ajax({
   url: "https://raw.githubusercontent.com/MalikSteam/account_public/main/private/GetFriendMessagesLog.json",
	type:"get",
	dataType: 'text',  
	error: function(data){
	//debugger;
	  //alert('err');
	},
	success:function(data) {
		var data = JSON.parse( data );
		
		var chatlog = unescape(data.html);
		$(".chatlog").append(chatlog);
		
		//$('#chatlog_table').DataTable();
		$('#chatlog_table').DataTable( {
		  "ordering": false
		} );
		$("#chatlog_table_wrapper > div:nth-child(3) > div.col-sm-12.col-md-5").hide();
	}
});