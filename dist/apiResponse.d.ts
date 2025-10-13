export declare const apiResponse: {
    success: <T>(response: T, statusCode?: number, meta?: object, msg?: string) => {
        success: boolean;
        response: T;
        msg: string | null;
        meta: object | null;
        statusCode: number;
    };
    error: (error: string, statusCode?: number, response?: any) => {
        error: string;
        statusCode: number;
        response: any;
    };
};
//# sourceMappingURL=apiResponse.d.ts.map