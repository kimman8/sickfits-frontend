/// <reference types="node" />
import { ApolloServerBase, GraphQLOptions } from 'apollo-server-core';
import { ServerResponse } from 'http';
import { MicroRequest } from './types';
export interface ServerRegistration {
    path?: string;
    disableHealthCheck?: boolean;
    onHealthCheck?: (req: MicroRequest) => Promise<any>;
}
export declare class ApolloServer extends ApolloServerBase {
    createGraphQLServerOptions(req: MicroRequest, res: ServerResponse): Promise<GraphQLOptions>;
    createHandler({ path, disableHealthCheck, onHealthCheck, }?: ServerRegistration): (req: any, res: any) => Promise<void>;
    protected supportsUploads(): boolean;
    protected supportsSubscriptions(): boolean;
    private handleHealthCheck;
    private handleGraphqlRequestsWithPlayground;
    private handleGraphqlRequestsWithServer;
    private handleFileUploads;
}
//# sourceMappingURL=ApolloServer.d.ts.map