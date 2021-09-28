"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlMicro = void 0;
const apollo_server_core_1 = require("apollo-server-core");
const micro_1 = require("micro");
const url_1 = __importDefault(require("url"));
function setHeaders(res, headers) {
    Object.keys(headers).forEach((header) => {
        res.setHeader(header, headers[header]);
    });
}
function graphqlMicro(options) {
    if (!options) {
        throw new Error('Apollo Server requires options.');
    }
    if (arguments.length > 1) {
        throw new Error(`Apollo Server expects exactly one argument, got ${arguments.length}`);
    }
    const graphqlHandler = (req, res) => __awaiter(this, void 0, void 0, function* () {
        let query;
        try {
            query =
                req.method === 'POST'
                    ? req.filePayload || (yield micro_1.json(req))
                    : url_1.default.parse(req.url, true).query;
        }
        catch (error) {
        }
        try {
            const { graphqlResponse, responseInit } = yield apollo_server_core_1.runHttpQuery([req, res], {
                method: req.method,
                options,
                query,
                request: apollo_server_core_1.convertNodeHttpToRequest(req),
            });
            setHeaders(res, responseInit.headers);
            return graphqlResponse;
        }
        catch (error) {
            if ('HttpQueryError' === error.name && error.headers) {
                setHeaders(res, error.headers);
            }
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            micro_1.send(res, error.statusCode, error.message);
            return undefined;
        }
    });
    return graphqlHandler;
}
exports.graphqlMicro = graphqlMicro;
//# sourceMappingURL=microApollo.js.map