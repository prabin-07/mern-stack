let employee = {
    name : "Sam",
    address : {
        city : "kochi",
        state : "kerala"
    }
};

for(let val in employee){
    if(typeof(employee[val])=="object"){
        for(let key in employee[val]){
            console.log(employee[val][key]);
        }
    }
    else{
        console.log(employee[val]);
    }
}