const casesService = require("../service/casesService");

const getCases = (req, res, next) => {
  casesService
    .getCases()
    .then((cases) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: cases.length,
        data: cases,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getCasesById = (req, res, next) => {
    casesService
      .getCasesById(req.params.id)
      .then((cases) => {
        res.status(200).json({
          status: "OK",
          message: "Success",
          data: cases,
        });
      })
      .catch((err) => {
        next(err);
      });
  };

  module.exports = {
    getCases,
    getCasesById
  }
