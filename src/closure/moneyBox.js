// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log('moneyBox: ${saveCoins}');
// }

// moneyBox(5);
// moneyBox(5); 

// la logica anterior no funciono :(

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log('moneyBox $${savecoins}');
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxFabian = moneyBox();

moneyBoxFabian(10);
moneyBoxFabian(20);
moneyBoxFabian(5);

//  ejercicio ejemplo donde creamos closure para almacenar datos de mascotas
export function createPetList() {
    const petList = [];
    return function (newPet) {
      if (newPet) {
        petList.push(newPet)
      }
      return petList;
    }
  }
  
  const myPetList = createPetList();
  
  console.log(myPetList("michi"));
  console.log(myPetList("firulais"));
  console.log(myPetList());