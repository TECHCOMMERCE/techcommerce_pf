const axios = require("axios")
const { Category, Brand, Product }  = require("../../db")

let categories = [
  {
    id: "MLA1051",
    name: "Celulares y Teléfonos"
  },
  {
    id: "MLA1648",
    name: "Computación"
  },
  {
    id: "MLA1144",
    name: "Consolas y Videojuegos"
  }
];
let limit = 1; //Defino el limite de Productos por categoria


async function GetProductsAPI(){
  let count = await Product.count(); //Cuento los productos registrados en mi db
  console.log("Productos registrados en la DB", count)
  
  if(!count){ //Si conteo es 0, registro productos
    let names=categories.map(c=>{ //filtro los nombres de las categorias y hago el registro
      return {
        name: c.name
      }
    })
    await Category.bulkCreate(names)
  }
  
  for(let i=0; i<1/* categories.length */;i++){
    let request = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?has_pictures=true&offset=${0}&limit=${limit}&category=${categories[i].id}`);

    request.data.results.forEach(async p=>{
      let cproduct= await Product.create({//findOrCreate({
       /*  where: {name: p.title},
        defaults:{ */
            name: p.title,
            price:p.price,
            stock: p.available_quantity,
            sold_quantity: p.sold_quantity,
            condition: p.condition,
            attributes: p.attributes,
            image: p.thumbnail,
            brandid: await getBrand(p.attributes.filter(elem=>elem.id ==="BRAND")) //verifico si existe la marca, sino la creo
         /*  } */
        })

        //console.log("idCategory",await getCategory(categories[i].name))
        //await cproduct.addCategory(await getCategory(categories[i].name))
        //let cat=await getCategory(categories[i].name)
        //cat.addProduct(cproduct)
      //cproduct.setCategory(await getCategory(categories[i].name))
      //console.log(cproduct)
    })
  }

  //console.log(data)

}


async function getBrand(att){
  console.log(att)
  let att_name=att[0].value_name
  console.log(att_name)
  let brand = await Brand.findOrCreate({
    where:{name: att_name}
  })
  //console.log("idbrand",brand[0].dataValues.brandid)
  return brand[0].dataValues.brandid
}

async function getCategory(name){
  let category = await Category.findOrCreate({
    where:{name: name}
  })
  return category//[0].dataValues.categoryid
}

module.exports= {
  GetProductsAPI
}


