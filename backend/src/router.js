const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const shoppingCartController = require("./controllers/shoppingCartController");
const mascaraController = require("./controllers/mascaraController");
const foundationController = require("./controllers/foundationController");
const lipstickController = require("./controllers/lipstickController");
const verifyToken = require("./middlewares/verifyToken");

router.get("/users", verifyToken, userControllers.browse);
router.get("/users/:id", userControllers.read);
router.get("/users/:id/field", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.post("/login", userControllers.login);
router.delete("/users/:id", userControllers.destroy);

router.post("/cart/add", shoppingCartController.addToCart);
router.delete(
  "/cart/remove/:cartId/:itemId",
  shoppingCartController.removeFromCart
);
router.get("/cart/view/:userId", shoppingCartController.viewCart);
router.put(
  "/cart/update/:cartId/:itemId/:quantity",
  shoppingCartController.updateCartItemQuantity
);
router.delete("/cart/clear/:cartId", shoppingCartController.clearCart);
router.delete("/cart/clear/:cartId/:itemId", shoppingCartController.clearCart);

router.get("/mascara/:id", mascaraController.read);
router.get("/mascara", mascaraController.readAll);
router.post("/mascara", mascaraController.add);
router.put("/mascara/:id", mascaraController.edit);
router.delete("/mascara/:id", mascaraController.destroy);

router.get("/foundation/:id", foundationController.read);
router.get("/foundation", foundationController.readAll);
router.post("/foundation", foundationController.add);
router.put("/foundation/:id", foundationController.edit);
router.delete("/foundation/:id", foundationController.destroy);

router.get("/lipstick/:id", lipstickController.read);
router.get("/lipstick", lipstickController.readAll);
router.post("/lipstick", lipstickController.add);
router.put("/lipstick/:id", lipstickController.edit);
router.delete("/lipstick/:id", lipstickController.destroy);

module.exports = router;
