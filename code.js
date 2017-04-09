alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var states = [0, 0];
iRunningRequests = 0;
var x = setInterval(function(){
if (iRunningRequests == 5)
	return;
for (i = states.length - 1; i > 0; i--)
if (states[i] == alphabet.length){
states[i] = 0;
states[i - 1]++;
}

if (states[0] == alphabet.length){
clearInterval(x);
return;
}
var xmlhttp = new XMLHttpRequest();
xmlhttp.username = "";
for (i = 0; i < states.length; i++)
xmlhttp.username = xmlhttp.username + alphabet[states[i]];
alphabet[states[states.length - 1]++];
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4)
		iRunningRequests--;
    if (this.status == 404 && this.readyState == 4) {
       console.log("username available:" + this.username);
    }
};
xmlhttp.open("GET", "/" + xmlhttp.username, true);
iRunningRequests++;
xmlhttp.send();
}, 100);
