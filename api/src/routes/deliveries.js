const getDeliveries = require("../controllers/Deliveries/GetDeliveries");
const router = require("express").Router();

router.get("/", async (req, res) => {
  let deliveries;
  if(req.query){
    deliveries = await getDeliveries(req.query);

    return deliveries ? res.send(deliveries) : res.send ([])
  }

  deliveries = await getDeliveries();
  return deliveries ? res.send(deliveries) : res.send([]);
})

module.exports = router;