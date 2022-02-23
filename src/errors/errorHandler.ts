import { Request, Response } from 'express'
import httpException from './httpException'

function ErrorHandler(err: httpException, req: Request, res: Response
) {
    const status = err.status || 500
    const message = err.message || 'Something went wrong'

    return res.status(status).json({
        error: err,
        status,
        message,
        stack: err.stack
    })
}

export default ErrorHandler