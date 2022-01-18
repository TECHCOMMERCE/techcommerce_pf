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
let limit = 200; //Defino el limite de Productos por categoria


async function GetProductsAPI(){
  try {
    let count = await Product.count(); //Cuento los productos registrados en mi db
    console.log("Productos registrados en la DB", count)
    
    if(!count){ //Si conteo es 0, registro productos
      let names=categories.map(c=>{ //filtro los nombres de las categorias y hago el registro
        return {
          name: c.name
        }
      })
      await Category.bulkCreate(names)
    
    
      for(let i=0; i<categories.length;i++){
       let auxoffset=0;
        while(auxoffset<limit){
          let request = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?has_pictures=true&offset=${auxoffset}&category=${categories[i].id}`);

          request.data.results.forEach(async p=>{
            let search=await Product.findOne({where:{name: p.title.trim()}})
            //console.log(`search`, search)
            if(getBrand(p.attributes.filter(elem=>elem.id ==="BRAND")) && !search){
              let cproduct= await Product.create({
                    name: p.title.trim(),
                    price:p.price,
                    stock: p.available_quantity,
                    sold_quantity: p.sold_quantity,
                    condition: p.condition,
                    attributes: p.attributes,
                    image: p.thumbnail,
                    brandid: await getBrand(p.attributes.filter(elem=>elem.id ==="BRAND")) //verifico si existe la marca, sino la creo
                })
                await cproduct.addCategory(await getCategory(categories[i].name))
            }
          })
          auxoffset+=50;
          console.log("auxoffset",auxoffset) 
          
        }
      }
    }
    count = await Product.count(); //Cuento los productos registrados en mi db
    console.log("Fueron registrados productos en la DB", count)
  } catch (error) {
    console.log(error)
  }

}


async function getBrand(att){
  if(att.length>0 && att[0].hasOwnProperty("value_name")){
    let att_name= att[0].value_name
    let brand = await Brand.findOne({
      where:{name: att_name}
    })
    return (Array.isArray(brand))?brand[0].dataValues.brandid:null;
  }
  return null;
}

async function getCategory(name){
  let category = await Category.findOrCreate({
    where:{name: name}
  })
  return category[0].dataValues.categoryid
}

module.exports= {
  GetProductsAPI
}


