const router = require("express").Router();
const putDelivery = require("../controllers/Delivery/PutDelivery");
const getDeliveryById = require("../controllers/Delivery/GetDeliveryById");
const postDelivery = require("../controllers/Delivery/PostDelivery");
const {SendEmails} = require("../controllers/SendMails/main");

router.get("/:deliveryid", async (req, res) => {
  console.log(req.params.deliveryid);
  const delivery = await getDeliveryById(req.params.deliveryid);
  delivery ? res.send(delivery) : res.send([]);
});

router.post("/", async(req, res) => {
  const delivery = await postDelivery(req.body);
  
  delivery ? res.send("Delivery created") : res.send("Error");
});

router.put("/", async(req, res) => {
  const delivery = await putDelivery(req.body);
  delivery ? res.send("Delivery edited") : res.send("Error");
})

module.exports = router;