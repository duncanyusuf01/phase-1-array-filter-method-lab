// Code your solution here
const drivers=["Bobby","Sammy","Sally","Annette","Sarah","Bobby"];
function findMatching(drivers, name){
    return drivers.filter(drivers=>drivers.toLowerCase()=== name.toLowerCase());
}
function fuzzyMatch(drivers, name){
    return drivers.filter(drivers=>drivers.toLowerCase().startsWith(name.toLowerCase()));
}
function matchName(drivers,name){
    return drivers.filter(drivers=>drivers.name===name)
}