export function formatResponse(data: any, statusCode: number = 200) {
    return {
        statusCode,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    };
}