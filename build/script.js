$(function(){var a="",e="",n=function(n){$.each(n.data,function(e,n){a+="<li>",a+='<div class="photo-cont"><a href="'+n.link+'">',a+='<img src="'+n.images.standard_resolution.url+'"></a>',a+='<div class="user-info-cont">',a+='<img src="'+n.user.profile_picture+'" class="user-pic" />',a+='<div class="social-info"><span class="user-name">'+n.user.username+"</span>",a+='<span><i class="fa fa-comments"></i>'+n.comments.count,a+='<i class="fa fa-heart"></i>'+n.likes.count+"</span>",a+="</div></div></div></li>"}),$(".photo-grid").append(a),e=n.pagination.next_url,a=""};$(".search-button").on("click",function(o){o.preventDefault();var t=$(".search-bar").val();console.log(t),$("header").addClass("results-header"),$(".photo-grid").empty(),$(".load-more").empty(),$.ajax({dataType:"jsonp",method:"GET",url:"https://api.instagram.com/v1/tags/"+t+"/media/recent?count=12&client_id=b8586475183a4ad89a5a0ebd4a36fbc2"}).done(n),$(".photo-grid").append(a),$(".load-more").append('<button class="add-content">Load More</button>'),$(".add-content").on("click",function(o){o.preventDefault(),$.ajax({dataType:"jsonp",method:"GET",url:e}).done(n),$("photo-grid").append(a)})})});