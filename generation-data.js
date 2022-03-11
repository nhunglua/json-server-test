var casual = require('casual');
const fs = require('fs');

// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism
var sentence = casual.sentence;

// Generate random city name
var city = casual.city;

// Define custom generator
casual.define('point', function() {
	return {
		x: Math.random(),
		y: Math.random()
	};
});

// Generate random point
var point = casual.point;

console.log({sentence, city});

const randomCategoryList = (n) => {

  if(n <= 0) return [];

  //loop and push category

  const categoryList = [];
  Array.from(new Array(n)).forEach(() => {
    const category = {
      sentence: casual.sentence,
      city: casual.city
    };

    categoryList.push(category);
  });

  return categoryList;
}

const randomProductList = (categoryList, number) => {
  const productList = [];

  Array.from(categoryList).forEach((item) => {
    Array.from(new Array(number)).forEach(() => {
      const product=  {
        id: item.sentence,
        name: casual.phone,
      }

      productList.push(product)
    })
  })

  return productList;
}


//IFEE
(() => {
  //random data
  const categoryList = randomCategoryList(4);
  const productList = randomProductList(categoryList, 5);
//prepare db object

var db = {
  categories: categoryList,
  comments: [],
  products: productList,
}

  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('success');
  })
})();
