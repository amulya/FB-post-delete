var message = "Testing out app";
var post_id = 0;

function postit(){
    FB.api('/mefeed', 'post', { message : message }, function(response){
        if( !response || response.error ) {
            alert('Error');
        } else {
            post_id = reponse.id;
            alert('ID: ' + response.id);
        }
    });
}

function deleteit(){
    FB.api(post_id, 'delete', function(response){
        if(!response || response.error) {
            alert('Error');
        } else {
            alert('Post' + post_id + 'deleted');
        }
    });
}