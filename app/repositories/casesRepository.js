const { cases } = require("../models");

const getCases = () => {
  return cases.findAll();
};

const findCasesById = (id) => {
  const find = cases.findOne({
    where: {
      id,
    },
  });
  return find;
};

module.exports ={
    getCases,
    findCasesById
}