let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 = [24, 65, 21, 5, 9];

let restructuredArray = [];

for (let i = 0; i < subArray1.length; i++) {
    restructuredArray.push([subArray1[i], subArray2[i]]);
}

console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach(item => {
    console.log(item);
});
