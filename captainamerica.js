let friends = [
"Mari",
"MaryJane",
"Captain America",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        console.log(friends[i]);
        if(friends[i]==="Captain America")
            break;
    }
}
dataHandling(friends);