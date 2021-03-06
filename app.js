let totalPoints = 0;
let totalMultiplier = 1;
let total = document.getElementById("total-points");
let multiplier = document.getElementById("multiplier");
let autoPerSecond = 0;

// CLICK UPGRADES
let clickUpgrades = {
    item1: {
        price: 1,
        quantity: 0,
        multiplier: 1
    },
    item2: {
        price: 2,
        quantity: 0,
        multiplier: 2
    },
    item3: {
        price: 3,
        quantity: 0,
        multiplier: 3
    }
}
// AUTO UPGRADES
let autoUpgrades = {
    item4: {
        price: 4,
        quantity: 0,
        multiplier: 5,
        auto: 5, 
    }
}

// ADD POINTS
function addPoint() {
    let perClick = 1 * totalMultiplier;
    totalPoints += perClick;
    update()
}

// UPDATE DOM
function update() {
    total.innerText = totalPoints;
    multiplier.innerText = totalMultiplier;
}

function startInterval() {
    setInterval(collectAutoUpgrades, 3000);
}

function collectAutoUpgrades(){  
    for(let item in autoUpgrades) {
        autoPerSecond = autoUpgrades[item].quantity * autoUpgrades[item].multiplier;
    }     
    document.getElementById('ppp').innerText = autoPerSecond;
    totalPoints += autoPerSecond;
    update();
}

function buyItem(currentitem) {
    let item;
    if(currentitem === 'item4') {
        item = autoUpgrades[currentitem]
    } else {
        item = clickUpgrades[currentitem];
    }

  let itemText = document.getElementById(`${currentitem}-total`);
  let itemPrice = document.getElementById(`${currentitem}-price`);

  if (totalPoints >= item.price) {
        totalPoints -= item.price;
        item.quantity++;
        item.price += item.price;
        totalMultiplier += item.multiplier;

        itemText.innerText = item.quantity;
        itemPrice.innerText = item.price;
        multiplier.innerText = totalMultiplier;
        update();
    }
}

startInterval();