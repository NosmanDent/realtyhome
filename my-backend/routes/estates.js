const express = require("express");
const {
  getEstates,
  getEstate,
  createEstate,
  getAdvanceEstateSearch,
  getEstatesByCategory,
  searchEstates,
  getEstatesByState,
} = require("../controllers/estateController");

const router = express.Router();

// GET all Estates
router.get("/", getEstates);

// GET a single Estate
router.get("/:id", getEstate);

// GET all Estate by category
router.get("/category/:category", getEstatesByCategory);

// GET all Estate by state
router.get("/state/:state", getEstatesByState);

router.get("/search/:query", searchEstates);

router.get(
  "/advancesearch/:query/:minPrice?/:maxPrice?",
  getAdvanceEstateSearch
);

// POST a new Estate
router.post("/", createEstate);

module.exports = router;
