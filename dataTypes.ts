let fName: string = "Usman";
let age:number = 45;
let isActive: boolean = true;
let car:null = null;
let salary:any = 8000;

let bikesArr:string[]= ["Yamaha","RX100","Suzuki"];
console.log(bikesArr);

//Generics
let empNames:Array<string> = ["Usman","Sufiyaan","Rayaan"];
let empIDs:Array<number> = [45,18,17];
let address:Array<any> = ["Street 127","SteamboatLN","MO",63011];

//Multi type
let address1:(string|number)[] = ["SteamboatLN", 127,"Ballwin",63011];

//Declare and then initialize
let countries:Array<string>;
countries = ["USA","Dubai","SA"];

//for loop index base
for(let i=0; i<empNames.length;i++){
    console.log(empNames[i]);
}

//for of loop
for(let j of empIDs){
    console.log(j);
}

//for in loop
for(let k in address){
    console.log(k +":"+address[k]);
}

function mul(a:number, b:number){
    return a*b;
}
console.log(mul(2,5));