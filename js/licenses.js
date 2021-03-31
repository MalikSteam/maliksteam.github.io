//licenses.json
$.ajax({
   url: "https://raw.githubusercontent.com/MalikSteam/account_public/main/private/licenses.json",
	type:"get",
	dataType: 'text',  
	error: function(data){
	//debugger;
	  //alert('err');
	},
	success:function(data) {
		var data = JSON.parse( data );
		
		var licenses = unescape(data.html);
		
		
		$("#licenses").append(licenses);
		$(".account_table").addClass("table");
		$(".account_table").addClass("table-striped");
		$(".account_table").addClass("table-bordered");
		$('.account_table').attr('id','licenses_table')

		$('#licenses_table').DataTable( {
		  "ordering": false
		} );
		$("#licenses_table_wrapper > div:nth-child(3) > div.col-sm-12.col-md-5").hide();
	}
});