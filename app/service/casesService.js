const casesRepository = require("../repositories/casesRepository")
const httpStatus = require("http-status")
const ApiError = require("../../utils/ApiError")

const getCases = async () => {
    return await casesRepository.getCases()
}

const getCasesById = async (id) => {
    const cases = await casesRepository.findCasesById(id)

    if(!cases){
        throw new ApiError(httpStatus.NOT_FOUND, "cases not found")
    } else {
        return cases
    }
}

module.exports= {
    getCases,
    getCasesById
}