const ErrorHandler = myFunc => {
    const func = async(req, res, next) => {
        try {
            await myFunc(req, res, next);
        }
        catch(error) {
            next(error);
        }
    }

    return func;
}

module.exports = ErrorHandler;
