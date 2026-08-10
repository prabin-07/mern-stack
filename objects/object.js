let employee = {
    name : "Prabin",
    address : {                     //
        city : "Kottayam",
        state : "kerala"               //Arrays are considered objects
    },
    phn : [9961583169,7672926282]   //
};

for(let val in employee){
    if(typeof(employee[val])=="object"){
        for(let key in employee[val]){
            console.log(employee[val][key]);
        }
    }
    // else{
    //     console.log(employee[val]);
    // }
}