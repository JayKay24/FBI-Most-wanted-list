let count = 1;

function beginETL() {
    console.log('ETL process has started...', count++);
}

module.exports = {
    beginETL
};