
$(function() {
    $('.comhead a, .subtext a').each(function() {
      var link_src = $(this).attr('href');
      if (link_src.substr(0, 8) != "user?id=") {
        return;
      }
      var link = $(this);
      var username = $(this).attr('href').substr(8)
      $(this).attr("data-toggle", "tooltip")
      $(this).attr("data-backdrop", "black")
      $(this).attr("data-trigger", "hover")
      $(this).attr("data-url", "https://hacker-news.firebaseio.com/v0/user/"+username+".json?print=pretty")
      $(this).attr("title", "Loading...")
    });
});

$(function(){
    $('[data-toggle="tooltip"]').jTippy().on('jt-show', function(e, tooltip, hide){
        $(this).removeAttr('title')
        let url = $(this).attr('data-url');
        fetch(url, {
            mode: 'cors'
          })
        .then(res => res.json())
        .then(out => {
            let about = out.about
            let created = out.created
            var date = new Date(created * 1000).toISOString().slice(0, 19).split('T')[0];
            let karma = out.karma
            let id = out.id
            var ht = "";
            if(about != undefined){
                ht = "<p style='font-size: 8pt; color: white'>About: "+about.replace(/<\/?[^>]+(>|$)/g, "")+" </p><p style='font-size: 8pt; color: white'>Created: "+date+"</p><p style='font-size: 8pt; color: white'>Karma: "+karma+"</p><p style='font-size: 8pt; color: white'>ID: "+id+"</p>";
            } else {
                ht = "<p style='font-size: 8pt; color: white'>Created: "+date+"</p><p style='font-size: 8pt; color: white'>Karma: "+karma+"</p><p style='font-size: 8pt; color: white'>ID: "+id+"</p>";
            }
            $(tooltip).html("<h2>"+ht+"</h2>")  
        }
        )
        .catch(err => { $(tooltip).html("<p>An error occured</p>") });

    });
});