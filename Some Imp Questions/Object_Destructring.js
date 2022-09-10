// Destructuring

// let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
// let {realName, city, heroName} = newAvenger;
// console.log(realName);
// console.log(city);
// console.log(heroName);

// -----------------------------------

// let {realName, city, heroName} = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
// console.log(realName);
// console.log(city);
// console.log(heroName);

// --------------------------------

// let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
// let realName, city, heroName;
// ({realName, city, heroName} = newAvenger);
// console.log(realName); 

// ------------------------------------

// let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
// let realName, location, heroName;
// ({realName: fooName, city: location, heroName: barName} = newAvenger);
// console.log(fooName); // Tony Stark
// console.log(location); // California
// console.log(barName); // Iron Man

// ---------------------------------------

// let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
// let {realName = 'Downey Jr', location = 'Malibu'} = newAvenger;
// console.log(realName); // Tony Stark
// console.log(location); // Malibu

// ---------------------------------------

// let prop = "realName";
// let {[prop] : foo} = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
// console.log(foo); // Tony Stark

// --------------------------------------

// let newAvenger = {
//     realName: "Tony Stark",
//     location : {
//     country: "USA",
//     city: "California"
//     },
//     heroName: "Iron Man"
// };
// let {
//     realName: foo,
//     location: {
//     country: bar,
//     city : x
//     },
// } = newAvenger;
// console.log(foo); // Tony Stark
// console.log(bar); // USA
// console.log(x); // California

// -----------------------------------------

    // let newAvenger = {
    //     realName: "Tony Stark", country: "USA", city: ["California", "Malibu"], heroName: "Iron Man"
    // };
    // let { realName, country, ...restOfDetails } = newAvenger;
    // console.log(realName); // "Tony Stark"
    // console.log(restOfDetails); // { city: [ 'California', 'Malibu' ], heroName: 'Iron Man' }

// -------------------------------------------

