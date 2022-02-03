import Query from "../models/query"

export const createQuery = async (data) => {
    const query = await Query(data)
    query.save()
    return query
}

export const getAllQueries = async (data) => {
    const queries = await Query.find()
    return queries
}

export const getOneQuery = async (id) => {
    const queries = await Query.findOne({ _id: id })
    return queries
}

export const deleteQuery = async (id) => {
    try {
        const result = await Query.findByIdAndDelete(id)
        if (!result) {
            return "the query you are trying to delete does not exist"
        } else {
            return "Query deleted successfully"
        }
    } catch (error) {
        return "the query you are trying to delete does not exist"
    }
}