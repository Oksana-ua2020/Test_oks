    "use strict"
        let name ="John";
        let age16 = true;
        let numCard = 25;
        let maxPrice = 1000200030004000500060007000n;
        let sex;
        let city = null;

    console.log('option 1');  
        console.log(
        `${typeof(name)} - ${name}, ${typeof(age16)} - ${age16}, ${typeof(numCard)} - ${numCard}, `
        + typeof(maxPrice) + ' - ' + maxPrice + ', "undefined" - ' + typeof(sex) + ', '  + "'null'"  + ' - ' + city);

    console.log('option 2');  
        console.log(
            `${"string"} - ${name}, ${"boolean"} - ${age16}, ${"number"} - ${numCard}, `
            + 'bigint - ' + maxPrice + ', "undefined" - ' + sex + ', ' + "'null'" + ' - ' + city);
 
