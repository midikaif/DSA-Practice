Object =[ {
      Id: 45,
      Name: "ram"
      }, //0
      {
      Id: 4,
      Name: "raju"
      }, //1
      {
      Id: 90,
      Name: "kumar"
      } //2
];

let arr = []
let n = Object.length-1, max = -Infinity;

for(let i = 0; i<=n; i++){
      if(Object[i].Id > max){
            max = Object[i].Id
            arr.push(Object[i])
      }
      else if(Object[i].Id < max){
            arr.unshift(Object[i])
      }
}

console.log(arr)

