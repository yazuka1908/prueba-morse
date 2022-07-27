const HTTP_STATUS = {
    OK: {statusCode:200, error: "OK"},
    BAD_REQUEST: {statusCode:400, error: "Bad Request"},
    INTERNAL_SERVER_ERROR: {statusCode:500, error: "Internal Server Error"}    
}


module.exports = {
    HTTP_STATUS
}