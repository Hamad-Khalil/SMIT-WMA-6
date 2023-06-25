let numberOfMonth= 02;
if(numberOfMonth===4 || numberOfMonth===6||numberOfMonth===9 || numberOfMonth===11){
    console.log("This Month has 30 days")
} else if(numberOfMonth===12||numberOfMonth===10|| numberOfMonth===8 || numberOfMonth===7 ||numberOfMonth===5 || numberOfMonth===3 || numberOfMonth===1){
    console.log("This Month has 31 days")
} else if( numberOfMonth===2){
    console.log("This month has 28 days but in leap year, it has 29 days")
} else{
    console.log("Invalid Month number")
}