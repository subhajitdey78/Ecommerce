// while testing a controller, we need to make sure that the request object
// contains


module.exports = {

    mockRequest: () => {

        const req = {};
        req.body = jest.fn().mockReturnValue(req);
        req.params = jest.fn().mockReturnValue(req);
        return req;
     },

     mockResponse: () => {

        const res = {};
        res.send = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
     }
}