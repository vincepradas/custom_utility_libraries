"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiResponse = void 0;
exports.apiResponse = {
    success: (response, statusCode = 200, meta, msg) => ({
        success: true,
        response,
        msg: msg ?? null,
        meta: meta ?? null,
        statusCode,
    }),
    error: (error, statusCode = 400, response) => ({
        error: error,
        statusCode,
        response: response ?? null
    })
};
//# sourceMappingURL=apiResponse.js.map