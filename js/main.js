    "use strict"
    console.log('option 1');  
        let name ="John";
        let age16 = true;
        let numCard = 25
        let maxPrice = 1000200030004000500060007000n;
        let sex;
        let city = null;
    console.log(
        `${typeof(name)} - ${name}, ${typeof(age16)} - ${age16}, ${typeof(numCard)} - ${numCard}, `
        + typeof(maxPrice) + ' - ' + maxPrice + ', "undefined" - ' + typeof(sex) + ', '  + "'null'"  + ' - ' + city);

    console.log('option 2');
        let nameUser ="John";
        let age16User = true;
        let numCardUser = 25
        let maxPriceLast = 1000200030004000500060007000n;
        let sexUser;
        let cityUser = null;
    console.log(
        `${"string"} - ${nameUser}, ${"boolean"} - ${age16User}, ${"number"} - ${numCardUser}, `
        + 'bigint - ' + maxPriceLast + ', "undefined" - ' + sexUser + ', ' + "'null'" + ' - ' + cityUser);
 
