
	//--Background Cycling Script--//
		//this script is almost perfect
		//:-it flashes white every minute or so
		//:-I've spent considerable(days) time on it
		//:-I'm out of time - I'll revisit
	
	$( document ).ready(function() {
		$('#button').on('click', clicked);
    });
	
	var urlBucket = [
		"https://images.unsplash.com/photo-1495296331652-02aafd80b5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80",
		// <!-- https://unsplash.com/photos/Rkfpms9o5fk -->
		"https://images.unsplash.com/photo-1468746587034-766ade47c1ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		// <!-- https://unsplash.com/photos/7rrgPPljqYU -->
		"https://images.unsplash.com/photo-1544945582-50de0223b6a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
		// <!-- https://unsplash.com/photos/I7584-7fmQ8 -->
		"https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		// <!-- https://unsplash.com/photos/lT7zmkth3o8 -->
		"https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
		// <!-- https://unsplash.com/photos/DxmBSgUYKis -->
		"https://images.unsplash.com/photo-1550951298-5c7b95a66bfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1780&q=80",
		// <!-- https://unsplash.com/photos/rK2HPIseisA -->
		"https://images.unsplash.com/photo-1512345086075-c11ad8703924?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
		// <!-- https://unsplash.com/photos/bILbaGnm6yI -->
		"https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
		// <!-- https://unsplash.com/photos/n7DY58YFg9E -->
		]
		
	var imageUrl = "https://images.unsplash.com/photo-1523632117739-12cc7fa95ad0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=490&q=80";
	<!-- there is a flash somewhere in this animation, I believe when it runs out of images - find and eliminate -->
	var i = 0;	
	setInterval(function loopBackground() {		
		imageUrl = urlBucket[i];
		var picture = urlBucket[Math.floor(Math.random() * urlBucket.length)];
		$('#bg').css('background', 'url(' + picture + ')');		
		i++;
		if (i = urlBucket.length) {
			i=0;
		}
	}, 7000);


//css:

/*	
	#bg{
		visibility: visible;
		background: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80");
		background-repeat: no-repeat;
		opacity:0.9;
		background-color:#ccc;
		position:fixed;
		width:100vw;
		height:100vh;
		top:0px;
		left:0px;
		filter: blur(6px);
		z-index:1;
		background-size: 100% 100% !important;		
		transition: background 3s ease-in-out;		
		}
*/
// (ww) 4.16.19