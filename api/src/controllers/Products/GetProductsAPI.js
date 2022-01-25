
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
let limit = 100; //Defino el limite de Productos por categoria


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
            if(!search){
              let newProduct={
                name: p.title.trim(),
                price:p.price,
                stock: p.available_quantity,
                sold_quantity: p.sold_quantity,
                condition: p.condition,
                attributes: await getAttributes(p.id),
                image: p.thumbnail,
              }
              if(newProduct.attributes.filter(att=>att.name=="Marca").length>0){
                let cproduct= await Product.create(newProduct) //Registro el producto
                  //await getCategory(categories[i].name)
                let namebrand=await getBrand(newProduct.attributes.filter(att=>att.name=="Marca"))  
                //console.log(namebrand)
                let brand = await Brand.findOne({ where: { name: namebrand } });
                await brand.addProduct(cproduct)

                const category = await Category.findOne({
                  where: { name: categories[i].name },
                });

                cproduct.addCategory(category);
              }
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

async function getBrand(obj){
  //console.log(obj)
  let name=obj[0].value
  await Brand.findOrCreate({
    where: { name },
    defaults: {
      name: name,
    },
  });
  return name;
}


async function getAttributes(id){
  let {data} = await axios.get(`https://api.mercadolibre.com/items/${id}`);
  //console.log(data.attributes)
  return data.attributes.map(el=>{
    if(el.id!=="GTIN" || el.id!=="EXCLUSIVE_CHANNEL"||el.id!=="BRAND"){
      return {name:el.name, value:el.value_name}
    }
  })
}

module.exports= {
  GetProductsAPI

}