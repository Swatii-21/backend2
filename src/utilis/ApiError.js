class ApiError extends Error {
    constructor(
        HttpStatusCode,
        message= "Something went wrong" , 
        error = [] , 
        stack = ""
    ){
        super(message)
        this.statusCode =  statusCode
        this.data = null
        this.message = message
        this.success = false ; 
        this.error = this.errors


        if(stack){
            this.stack = stack
        } else {
            Error.captureStackTrace(this,this.
                constructor
            )
        }


    }
}

export {ApiError}