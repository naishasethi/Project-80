var name_people = [];
function submit() {
    var guestname= document.getElementById("name1").value;
    name_people.push(guestname);
    console.log (guestname);
    console.log (name_people);
    var length= name_people.length;
    console.log (length);
    document.getElementById("display").innerHTML=name_people.toString();
}
function sort() {
    name_people.sort();
    var i = name_people.join("<br>");
    console.log(name_people);
    document.getElementById("sortnames").innerHTML=i.toString();
}
function show() {
    var i = name_people.join("<br>");
    console.log(name_people);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort").style.display="inline-block";
}
function search() {
    var s = document.getElementById("s1").value;
    var found=0;
    var j;
    for (j=0; j<name_people.length; j++) {
        if (s==name_people[j]) {
            found = found+1;
        }
    }
    document.getElementById("p2").innerHTML = "name found   "+found+"  times";
}