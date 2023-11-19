const products = [
  {
    "Id": 1,
    "Name": "iPhone 12",
    "Img": "iphone15.jpg",
    "InternalMemory": "128GB",
    "RAM": "4GB",
    "Color": "Black",
    "Producer": "Apple", 
    "CPUName": "A14 Bionic",
    "OperatingSystem": "iOS",
    "Price": 799,
    "ModelNumber": "A2402",
    "Discount": 5,
    "NFC": true,
    "BatteryCapacity": "2815mAh",
    "SIM": 1,
    "Availability": true
  },
  {
    "Id": 2,
    "Name": "Galaxy S21",
    "Img": "xiomi.png",
    "InternalMemory": "256GB",
    "RAM": "8GB",
    "Color": "Phantom Violet",
    "Producer": "Samsung",
    "CPUName": "Exynos 2100",
    "OperatingSystem": "Android",
    "Price": 899,
    "ModelNumber": "SM-G991U",
    "Discount": 10,
    "NFC": true,
    "BatteryCapacity": "4000mAh",
    "SIM": 1,
    "Availability": false
  },
  {
    "Id": 3,
    "Name": "Pixel 5",
    "Img": "pixel.png",
    "InternalMemory": "128GB",
    "RAM": "8GB",
    "Color": "Sorta Sage",
    "Producer": "Google",
    "CPUName": "Snapdragon 765G",
    "OperatingSystem": "Android",
    "Price": 699,
    "ModelNumber": "G025J",
    "Discount": 0,
    "NFC": true,
    "BatteryCapacity": "4080mAh",
    "SIM": 1,
    "Availability": true
  },
  {
    "Id": 4,
    "Name": "iPhone 12 Mini",
    "Img": "xiomi.png",
    "InternalMemory": "64GB",
    "RAM": "4GB",
    "Color": "Blue",
    "Producer": "Apple",
    "CPUName": "A14 Bionic",
    "OperatingSystem": "iOS",
    "Price": 699,
    "ModelNumber": "A2399",
    "Discount": 0,
    "NFC": true,
    "BatteryCapacity": "2227mAh",
    "SIM": 1,
    "Availability": true
  },
  {
    "Id": 5,
    "Name": "Galaxy Note 20 Ultra",
    "Img": "iphonex.jpg",
    "InternalMemory": "512GB",
    "RAM": "12GB",
    "Color": "Mystic Bronze",
    "Producer": "Samsung",
    "CPUName": "Exynos 990",
    "OperatingSystem": "Android",
    "Price": 1299,
    "ModelNumber": "SM-N986U",
    "Discount": 30,
    "NFC": true,
    "BatteryCapacity": "4500mAh",
    "SIM": 1,
    "Availability": true
  },
  {
    "Id": 6,
    "Name": "Xiaomi Redmi Note 10 Pro",
    "Img": "xiomi.png",
    "InternalMemory": "128GB",
    "RAM": "6GB",
    "Color": "Dark Night",
    "Producer": "Xiaomi",
    "CPUName": "Snapdragon 732G",
    "OperatingSystem": "Android",
    "Price": 279,
    "ModelNumber": "M2101K6G",
    "Discount": 0,
    "NFC": true,
    "BatteryCapacity": "5020mAh",
    "SIM": 2,
    "Availability": true
  },
  {
    "Id": 7,
    "Name": "Xperia 1 III",
    "Img": "pixel.png",
    "InternalMemory": "256GB",
    "RAM": "12GB",
    "Color": "Frosted Black",
    "Producer": "Sony",
    "CPUName": "Snapdragon 888",
    "OperatingSystem": "Android",
    "Price": 1299,
    "ModelNumber": "XQBC52/B",
    "Discount": 0,
    "NFC": true,
    "BatteryCapacity": "4500mAh",
    "SIM": 1,
    "Availability": true
  },
  {
    "Id": 8,
    "Name": "Mi 11 Ultra",
    "Img": "xiomi.png",
    "InternalMemory": "512GB",
    "RAM": "12GB",
    "Color": "Black",
    "Producer": "Xiaomi",
    "CPUName": "Snapdragon 888",
    "OperatingSystem": "Android",
    "Price": 1199,
    "ModelNumber": "M2102K1G",
    "Discount": 0,
    "NFC": true,
    "BatteryCapacity": "5000mAh",
    "SIM": 2,
    "Availability": false
  },
  {
    "Id": 9,
    "Name": "Mate 40",
    "Img": "iphonee11.jpg",
    "InternalMemory": "256GB",
    "RAM": "8GB",
    "Color": "Mystic Silver",
    "Producer": "Huawei",
    "CPUName": "Kirin 9000",
    "OperatingSystem": "Android",
    "Price": 999,
    "ModelNumber": "NOH-NX9",
    "Discount": 10,
    "NFC": true,
    "BatteryCapacity": "4200mAh",
    "SIM": 2,
    "Availability": true
  },
  {
    "Id": 10,
    "Name": "Moto G Power",
    "Img": "xiomi.png",
    "InternalMemory": "64GB",
    "RAM": "4GB",
    "Color": "Smoke Black",
    "Producer": "Motorola",
    "CPUName": "Snapdragon 662",
    "OperatingSystem": "Android",
    "Price": 249,
    "ModelNumber": "XT2041-4",
    "Discount": 5,
    "NFC": true,
    "BatteryCapacity": "5000mAh",
    "SIM": 1,
    "Availability": true
  },
  {
    "Id": 11,
    "Name": "Lumia 950 XL",
    "Img": "redmi.png",
    "InternalMemory": "32GB",
    "RAM": "3GB",
    "Color": "White",
    "Producer": "Microsoft",
    "CPUName": "Snapdragon 810",
    "OperatingSystem": "Windows",
    "Price": 499,
    "ModelNumber": "RM-1116",
    "Discount": 0,
    "NFC": false,
    "BatteryCapacity": "3340mAh",
    "SIM": 1,
    "Availability": true
  },
  {
    "Id": 12,
    "Img": "pixel.png",
    "Name": "Google Pixel 5",
    "InternalMemory": "128GB",
    "RAM": "8GB",
    "Color": "Just Black",
    "Producer": "Google",
    "CPUName": "Snapdragon 765G",
    "OperatingSystemEnum": "Android",
    "Price": 699,
    "ModelNumber": "GD1YQ",
    "Discount": 15,
    "NFC": true,
    "BatteryCapacity": "4080mAh",
    "SIM": 1,
    "Availability": true
  }
]

const categories = [
    'Price',
    'Producer',
    'Operating System',
    'SIM',
    'RAM',
    'Internal Memory',
    'NFC',
    'Battery Capacity',
    'Availability'
];

const filters = document.getElementsByClassName('filters')[0];
const productsView = document.getElementsByClassName('fourColumns')[0];

const images = ['xiomi.png', 'iphonex.jpg', 'redmi.png', 'pixel.png', 'iphonese.jpg', 'iphone11.jpg', 'iphonee11.jpg', 'iphone14.jpg', 'iphone15.jpg'];

const countNewPrice = (initialPrice, discount) => {
  return initialPrice * (100 - discount) / 100;
}

const countDifference = (initialPrice, discount) => {
  return '-' + initialPrice * discount / 100 + '$';
}

const smallDescription = (p) => {
  return `<div class=smallDescription>
    <div class="row"><p class="grey">Producer: </p><p> ${p.Producer}</p></div><hr>
    <div class="row"><p class="grey">Internal Memmory: </p><p> ${p.InternalMemory}</p></div><hr>
    <div class="row"><p class="grey">RAM: </p><p> ${p.RAM}</p></div>
  </div>`;
}


const fillProducts = (products) => {
  const imgs = products.map(p => [p.Img, p.Name]);
  products.forEach((p,i) => {
  
  productsView.innerHTML += `<div class=product>
    <p><span class='bordered green'>Delivery: 0$</span></p>
    <img style="width: 150px; height: 190px" src =./imgs/${p.Img} />
    <p>${p.Name}</p>
    ${p.Discount !== 0 ? `<p class=price><span class=crossed>${p.Price} $</span> ${Math.round(countNewPrice(p.Price, p.Discount))} $</p>` : `<p class=price>${p.Price} $</p>`}
    <div class='hiddenAnimation'>
      <div class='buttons'>
      <button class="cart">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
      <button  class="heart"><i class="fa-regular fa-heart"></i></button>
      </div>
      ${smallDescription(p)}
    </div>
    </div>`;
    }) 
}

fillProducts(products);

const removeIdenticalData = (arr) => {
    const filtered =  arr.filter((el, i) => {
        return arr.indexOf(el) === i;
    })

    return filtered;
}

const getDiversity = (category) => {
    const diversity = products.map((p) => {
        return p[normalizedText(category)]
    });

    return removeIdenticalData(diversity);
}

const normalizedText = (str) => {
  return str.replace(' ', '');
}

const handlePrice = (i) => {
    const prices = getDiversity('Price');
    filters.innerHTML += `<div class=category><p>Price</p></div>`;
    const categoryTag = document.getElementsByClassName('category')[i];
    
    categoryTag.innerHTML = `<div>
      <div class='filterHead'><p>Price</p><button class=plusPrice>+</button></div></div>
    <div style='display: none' class=hidePrice>
      <label for=Min>Min price: </label><input type=number name=Min id=Min />
      <label for=Max>Max price: </label><input type=number name=Max id=Max />
    </div><hr>
    `
}

const drawCategory = (category, i) => {
    filters.innerHTML += `<div class=category><div class='filterHead'><p>${category}</p><button class=plusPrice>+</button></div>
    <hr></div>`;
    const categoryTag = document.getElementsByClassName('category')[i];
    const hiddenDude = document.getElementsByClassName('hiddenDude')[i];
    const diversity = getDiversity(category);
    let forHTML = '';
    diversity.forEach(el => {
      if (category == 'Availability'){
        el ? categoryTag.innerHTML += `<div class=option><input style='display: none' id=InStock name=InStock value=InStock type=checkbox /><label style='display: none; text-align: left;' for='InStock'>In stock</label></div>` :
        categoryTag.innerHTML += `<div class=option><input style='display: none' id=OutOfStock name=OutOfStock value=OutOfStock type=checkbox /><label style='display: none; text-align: left;' for=OutOfStock>Out of stock</label></div>`;
      } else if (category == 'NFC'){
        el ? categoryTag.innerHTML += `<div class=option><input style='display: none' id='HasNFC' name='HasNFC' value='HasNFC' type=checkbox /><label style='display: none; text-align: left;' for='HasNFC'>Has NFC</label></div>` :
        categoryTag.innerHTML += `<div class=option><input style='display: none' id='NoNFC' name='NoNFC' value='NoNFC' type=checkbox /><label style='display: none; text-align: left;' for='NoNFC'>No NFC</label></div>`;
      } else {
        categoryTag.innerHTML += `<div class=option><input style='display: none' id=${el} name=${el} value=${el} type=checkbox /><label style='display: none; text-align: left;' for=${el}>${el}</label></div>`;
      }
    });
}



const drawCategories = (categories) => {
    categories.forEach((c, i)=> c === 'Price' ? handlePrice(i) : drawCategory(c,i));
}

drawCategories(categories);

const apply = document.getElementsByClassName('apply')[0];

let filtersArr = [];

const getFilters = () => {
  const inputFields = document.querySelectorAll('input');
  inputFields.forEach((inp) => {
    const category = inp.closest('.category').querySelector('p').innerHTML;

    if (inp.checked === true || (Number(inp.value) && inp.type !== 'checkbox')) {
      if (Number(inp.value) && inp.type !== 'checkbox') {
        filtersArr.push({[inp.id]: inp.value});
      } else {
        filtersArr.push({[category]: inp.value});
      }
    }
  });
}

function remove(e) {
  console.log(filtersArr.some(f => {
    const fKey = Object.keys(f);
    const lKey = Object.keys(e.target);
    fKey == lKey && f[fKey] == e.target[lKey];
  }));
}

// Toggle-buttons: cart, heart, plus:

const carts = document.querySelectorAll('.cart');
const hearts = document.querySelectorAll('.heart');
const plusPrices = document.querySelectorAll('.plusPrice');

const changeCart = (e) => {
  if (e.target.style.backgroundColor !== 'white'){
    e.target.style.backgroundColor = 'white';
    e.target.style.color = '#e53b3b';
    e.target.innerHTML = 'Remove from cart <i style="color: #e53b3b" class="fa-solid fa-cart-shopping"></i>';
  } else {
    e.target.innerHTML = 'Add to cart <i  style="color: white" class="fa-solid fa-cart-shopping"></i>';
    e.target.style.backgroundColor = '#e53b3b';
    e.target.style.color = 'white';
  }
}

const changeHeart = (e) => {
  if (e.target.style.color !== 'rgb(229, 56, 56)'){
    console.log('love')
    e.target.style.color = 'rgb(229, 56, 56)';
    e.target.innerHTML = '<i style="color: rgb(229, 56, 56)" class="fa-solid fa-heart"></i>';
  } else {
    console.log('favorite')
    e.target.innerHTML = '<i style=color: grey class="fa-regular fa-heart"></i>';
    e.target.style.color = 'grey';
  }
}

const changePlus = (e) => {
  if (e.target.innerHTML == '+'){
    e.target.innerHTML = '-';
  } else {
    e.target.innerHTML = '+';
  }
}

function activatePlus() {
  // Get the closest .category element
  const category = this.closest('.category');
  
  // Check the innerHTML of the plus button
  if (this.innerHTML === '-') {
    // If the innerHTML is '+', set the display of inputs, labels, and .hidePrice to 'none'
    category.querySelectorAll('label, input, .hidePrice').forEach(item => {
      item.style.display = 'none';
    });
    // Change the innerHTML of the plus button to '-'
    this.innerHTML = '+';
  } else {
    // If the innerHTML is '-', set the display of inputs, labels, and .hidePrice to 'block' if they exist
    category.querySelectorAll('label, input, .hidePrice').forEach(item => {
      item.style.display = 'block';
    });
    // Change the innerHTML of the plus button to '+'
    this.innerHTML = '-';
  }
}


document.querySelectorAll('.plusPrice').forEach(button => {
  button.addEventListener('click', activatePlus);
});
carts.forEach((cart) => cart.addEventListener('click', changeCart));
hearts.forEach((heart) => heart.addEventListener('click', changeHeart));






function createButton(id, category, text, inputId, numberInputId) {
  const button = document.createElement('button');
  button.innerText = text;
  button.className = 'deleteSelf';
  button.addEventListener('click', function() {
    const title = document.querySelector('.title');
    const existingCheckbox = document.getElementById(inputId);

    if (existingCheckbox && existingCheckbox.type === 'checkbox') {
      existingCheckbox.checked = false;
      existingCheckbox.value = '';
    }

    // const relatedNumberInput = document.getElementById(numberInputId);
    // if (relatedNumberInput && relatedNumberInput.type === 'number') {
    //   relatedNumberInput.value = ''; // Clear the value of the related number input
    // }

    this.remove();
  });

  return button;
}


function updateCheckboxTitle(category, id, checked) {
  const title = document.querySelector('.title');
  const existingButton = document.getElementById(`${id}-button`);

  if (existingButton) {
    existingButton.remove();
  }

  if (checked) {
    const button = createButton(id, category, `x ${category}: ${id}`, id);
    button.id = `${id}-button`;
    title.appendChild(button);
  }
}

function updateNumberTitle(category, id, value) {
  const title = document.querySelector('.title');
  const existingButton = document.getElementById(`${id}-button`);

  if (existingButton) {
    existingButton.remove();
  }

  if (value.trim() !== '') {
    const button = createButton(id, category, `x ${id}: ${value}`, 'number', id);
    button.id = `${id}-button`;
    title.appendChild(button);

    // Adjusting the event listener for the delete button
    const deleteButton = document.getElementById(`${id}-button`);
    deleteButton.addEventListener('click', function() {
        const relatedInput = document.getElementById(id);
        if (relatedInput) {
          relatedInput.value = '';
        }
        this.remove(); // Remove the delete button when clicked
    });
  }
}





// Event listener for checkbox inputs and numeric inputs
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', function() {
    const category = this.closest('.category').querySelector('p').innerText;
    const id = this.id;
    const value = this.value;

    if (input.type === 'checkbox') {
      updateCheckboxTitle(category, id, this.checked);
    } else if (input.type === 'number') {
      updateNumberTitle(category, id, value);
    }
  });
});




const cancelBtn = document.getElementsByClassName('grayBtn')[0];
cancelBtn.addEventListener('click', function() {
  // Reset all checkbox inputs
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
    const id = checkbox.id;
    const relatedButton = document.getElementById(`${id}-button`);
    if (relatedButton) {
      relatedButton.remove();
    }
  });

  // Reset all number inputs 
  document.querySelectorAll('input[type="number"]').forEach(numberInput => {
    numberInput.value = '';
    const id = numberInput.id;
    const relatedButton = document.getElementById(`${id}-button`);
    if (relatedButton) {
      relatedButton.remove();
    }
  });
});
