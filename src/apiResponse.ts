export const apiResponse = { 
    success: <T>(response: T, statusCode = 200, meta?: object, msg?: string) => ({
        success: true,
        response,
        msg: msg ?? null,
        meta: meta ?? null,
        statusCode,
    }),
    error: (error: string, statusCode = 400, response?: any) => ({
        error: error,
        statusCode,
        response: response ?? null
    })
}