$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
       let username = e.target.value;

       // Make request to Github
       $.ajax({
           url:'https://api.github.com/users/'+username,
            data:{
                client_id:'e073ecd1c42f9a54369d',
                client_secret:'61614d79262140daa56d919dcdf1c10622429830'
            }
       }).done(function(user){
            $('#profile').html(`
            <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">${user.name}</h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-3">
                  <img class="thumbnail avatar" src="${user.avatar_url}">
                  <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-secondary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                 <li class="list-group-item">Comapny: ${user.company}</li>
                 <li class="list-group-item">Website/blog: ${user.blog}</li>
                 <li class="list-group-item">location: ${user.location}</li>
                 <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
                </div>
              </div>
             </div>
            </div>
            `);
       });
    });
});