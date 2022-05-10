exports.apiResponse = (data={}, status=true,message="") =>{
    return({
        status,
        message,
        data
    });
}