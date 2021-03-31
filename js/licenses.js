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
		$(".licenses").append(licenses.replace(' </table>','').replace('<table class=\"account_table\"> <tr> <th class=\"license_date_col\">Date</th> <th>Item</th> <th class=\"license_acquisition_col\">Acquisition Method</th> </tr>',''));
		$('#licenses_table').DataTable( {
		  "ordering": false
		} );
		$("#licenses_table_wrapper > div:nth-child(3) > div.col-sm-12.col-md-5").hide();
	}
});