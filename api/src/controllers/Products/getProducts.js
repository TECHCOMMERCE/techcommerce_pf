const { Product, Category, Brand } = require("../../db.js");
const json = require("./DataProducts.json");

const getProducts = async (page) => {
  try {
    if(page > -1) {  
    const products = await Product.findAll({
      where: {status: true},
      include: [
        {
          model: Category,
          through: {
            attributes: [],
          },
        },
        {
          model: Brand,
        },
      ],
      limit: 9,
      offset: page * 9,
    })
      return products;
    }
    else {
      return await Product.findAll({
      
        include: [
          {
            model: Category,
            through: {
              attributes: [],
            },
          },
          {
            model: Brand,
          },
        ]
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProductsFiltered = async(body, page) => {
    //query = [category, brand]
   if(req.query) { 
    if(body.brand && body.category){
      let products = [];
      var index;
      await body.brand.map(async(x) => {
        index = await Product.findAll({
          where: {status: true},
          include : [{
            model: Brand,
            where: {name : x}
          }, 
          {
            model: Category,
            where: {name : body['category']}
          }
          ]
        })
        products = products.concat(index) 
      })
      return products;
     /*  console.log('entro aca 1')
      let products = await Product.findAll({
        where : {status: true},
        include: [{
          model: Category,
          where: {name : query.category}
        },
          {
            model : Brand,
            where : {name : query.brand}
          }
      ],
      limit: 9,
      offset: page * 9,
    })
    console.log('products', products)
    return products; */
    }
    if(body.category && !body.brand.length){
      console.log('entro aca 2')
      let products = await Product.findAll({
          where : {status: true},
          include: [{
            model: Category,
            where: {name : body['category']}
          },
            {model : Brand}
        ],
        limit: 9,
        offset: page * 9,
      })
      console.log('products', products)
      return products;
      }
      if(body.brand.length && !body.category.length){
        console.log('entro aca 3')
        let products=[];
        let index;
        await body.brand.map(async(x)=> {
          index = await Product.findAll({
            where: {status: true},
            include : [{
              model: Brand,
              where: {name : x}
            }, 
            {
              model: Category
              
            }
            ]
          })
          products = products.concat(index) 
        })
        /* let products = await Product.findAll({
            where : {status: true},
            include: [{
              model: Brand,
              where: {name : query.brand}
            },
              {model : Brand}
          ],
          limit: 9,
          offset: page * 9,
        })
        console.log('products', products)
        return products; */
        }
      }

      let products = await Product.findAll({
        where: {status: true},
        include : [{
          model: Category
        },
        {model : Brand  }
      ],
        limit: 9,
        offset: page * 9
      })

      return products;
      
    
}

module.exports = {getProducts, getProductsFiltered};
