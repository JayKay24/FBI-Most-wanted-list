async function paginate(query, page = 1, limit = 10) {
    return await query
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
}

module.exports = {
    paginate
};
