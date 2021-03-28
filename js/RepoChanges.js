$.ajax({
	url: 'https://api.github.com/repos/MalikSteam/account_public/commits',
	beforeSend: function (xhr) {
		xhr.setRequestHeader ("Accept: application/vnd.github.v3+json");
	},
	dataType: 'jsonp',	
	success: function(data){
		console.log(data.data[0].sha);
		$.ajax({
			url: 'https://api.github.com/repos/MalikSteam/account_public/commits/'+data.data[0].sha,
			//beforeSend: function (xhr) {
			//	xhr.setRequestHeader ("Accept: application/vnd.github.v3+json");
			//},
			dataType: 'jsonp',
			success: function(data){
				console.log(data.data.files[0].patch);
				$( ".commit_0" ).append( "<h4>" +data.data.files[0].filename+ '</h4><pre  style="font-size:66%;">' + data.data.files[0].patch + '<pre>' );

			}
		});
		
		$.ajax({
			url: 'https://api.github.com/repos/MalikSteam/account_public/commits/'+data.data[0].parents[0].sha,
			//beforeSend: function (xhr) {
			//	xhr.setRequestHeader ("Accept: application/vnd.github.v3+json");
			//},
			dataType: 'jsonp',
			success: function(data){
				console.log(data.data.files[0].patch);
				$( ".commit_1" ).append( "<h4>" +data.data.files[0].filename+ '</h4><pre  style="font-size:66%;">' + data.data.files[0].patch + '<pre>' );
			}
		});
		/*
		$.ajax({
			url: 'https://api.github.com/repos/MalikSteam/account_public/commits/'+data.data[2].parents[0].sha,
			//beforeSend: function (xhr) {
			//	xhr.setRequestHeader ("Accept: application/vnd.github.v3+json");
			//},
			dataType: 'jsonp',
			success: function(data){
				console.log(data.data.files[0].patch);
				$( ".commit_2" ).append( "<h4>" +data.data.files[0].filename+ "</h4><pre>" + data.data.files[0].patch + "<pre>" );
			}
		});
		$.ajax({
			url: 'https://api.github.com/repos/MalikSteam/account_public/commits/'+data.data[3].parents[0].sha,
			//beforeSend: function (xhr) {
			//	xhr.setRequestHeader ("Accept: application/vnd.github.v3+json");
			//},
			dataType: 'jsonp',
			success: function(data){
				console.log(data.data.files[0].patch);
				$( ".commit_3" ).append( "<h4>" +data.data.files[0].filename+ "</h4><pre>" + data.data.files[0].patch + "<pre>" );
			}
		});
		*/
	}
});
	

/*
{
	"sha": "dd84d9c279b955ea3a9d26b37e1f7bba7f3bd0ea",
	"node_id": "MDY6Q29tbWl0MzUxODE4NDI1OmRkODRkOWMyNzliOTU1ZWEzYTlkMjZiMzdlMWY3YmJhN2YzYmQwZWE=",
	"commit": {
		"author": {
			"name": "MalikSteam",
			"email": "soultwister@outlook.dk",
			"date": "2021-03-27T14:13:32Z"
		},
		"committer": {
			"name": "MalikSteam",
			"email": "soultwister@outlook.dk",
			"date": "2021-03-27T14:13:32Z"
		},
		"message": "userdata",
		"tree": {
			"sha": "efdf5898a01524c78896e5e6134f5989fe65c5c6",
			"url": "https://api.github.com/repos/MalikSteam/account_public/git/trees/efdf5898a01524c78896e5e6134f5989fe65c5c6"
		},
		"url": "https://api.github.com/repos/MalikSteam/account_public/git/commits/dd84d9c279b955ea3a9d26b37e1f7bba7f3bd0ea",
		"comment_count": 0,
		"verification": {
			"verified": false,
			"reason": "unsigned",
			"signature": null,
			"payload": null
		}
	},
	"url": "https://api.github.com/repos/MalikSteam/account_public/commits/dd84d9c279b955ea3a9d26b37e1f7bba7f3bd0ea",
	"html_url": "https://github.com/MalikSteam/account_public/commit/dd84d9c279b955ea3a9d26b37e1f7bba7f3bd0ea",
	"comments_url": "https://api.github.com/repos/MalikSteam/account_public/commits/dd84d9c279b955ea3a9d26b37e1f7bba7f3bd0ea/comments",
	"author": {
		"login": "MalikSteam",
		"id": 40527583,
		"node_id": "MDQ6VXNlcjQwNTI3NTgz",
		"avatar_url": "https://avatars.githubusercontent.com/u/40527583?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/MalikSteam",
		"html_url": "https://github.com/MalikSteam",
		"followers_url": "https://api.github.com/users/MalikSteam/followers",
		"following_url": "https://api.github.com/users/MalikSteam/following{/other_user}",
		"gists_url": "https://api.github.com/users/MalikSteam/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/MalikSteam/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/MalikSteam/subscriptions",
		"organizations_url": "https://api.github.com/users/MalikSteam/orgs",
		"repos_url": "https://api.github.com/users/MalikSteam/repos",
		"events_url": "https://api.github.com/users/MalikSteam/events{/privacy}",
		"received_events_url": "https://api.github.com/users/MalikSteam/received_events",
		"type": "User",
		"site_admin": false
	},
	"committer": {
		"login": "MalikSteam",
		"id": 40527583,
		"node_id": "MDQ6VXNlcjQwNTI3NTgz",
		"avatar_url": "https://avatars.githubusercontent.com/u/40527583?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/MalikSteam",
		"html_url": "https://github.com/MalikSteam",
		"followers_url": "https://api.github.com/users/MalikSteam/followers",
		"following_url": "https://api.github.com/users/MalikSteam/following{/other_user}",
		"gists_url": "https://api.github.com/users/MalikSteam/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/MalikSteam/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/MalikSteam/subscriptions",
		"organizations_url": "https://api.github.com/users/MalikSteam/orgs",
		"repos_url": "https://api.github.com/users/MalikSteam/repos",
		"events_url": "https://api.github.com/users/MalikSteam/events{/privacy}",
		"received_events_url": "https://api.github.com/users/MalikSteam/received_events",
		"type": "User",
		"site_admin": false
	},
	"parents": [
		{
			"sha": "3fd73820c50b35b31956c023888ba8cc2ad2f708",
			"url": "https://api.github.com/repos/MalikSteam/account_public/commits/3fd73820c50b35b31956c023888ba8cc2ad2f708",
			"html_url": "https://github.com/MalikSteam/account_public/commit/3fd73820c50b35b31956c023888ba8cc2ad2f708"
		}
	],
	"stats": {
		"total": 4,
		"additions": 3,
		"deletions": 1
	},
	"files": [
		{
			"sha": "cab05f480cc127091b593671bcb317faccd4b860",
			"filename": "private/userdata.json",
			"status": "modified",
			"additions": 3,
			"deletions": 1,
			"changes": 4,
			"blob_url": "https://github.com/MalikSteam/account_public/blob/dd84d9c279b955ea3a9d26b37e1f7bba7f3bd0ea/private/userdata.json",
			"raw_url": "https://github.com/MalikSteam/account_public/raw/dd84d9c279b955ea3a9d26b37e1f7bba7f3bd0ea/private/userdata.json",
			"contents_url": "https://api.github.com/repos/MalikSteam/account_public/contents/private/userdata.json?ref=dd84d9c279b955ea3a9d26b37e1f7bba7f3bd0ea",
			"patch": "@@ -4347,6 +4347,7 @@\n         1569390,\n         1570210,\n         1571270,\n+        1580100,\n         1585940\n     ],\n     \"rgOwnedPackages\": [\n@@ -9057,7 +9058,8 @@\n         527320,\n         554574,\n         528359,\n-        561457\n+        561457,\n+        558961\n     ],\n     \"rgPackagesInCart\": [],\n     \"rgPreferredPlatforms\": [],"
		}
	]
}
*/