class IllegalArgumentError extends Error {
    constructor(args){
        super(args);
        this.name = "IllegalArgumentError"
    }
}

module.exports = IllegalArgumentError