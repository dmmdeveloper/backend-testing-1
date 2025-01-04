class APIError extends Error {
    constructor(message ="Something Went Wrong :)" , statuscode = 401) {
        super(message);
        this.name = this.contructor.name;
        this.statuscode = statuscode;
    }
}