import http from "http";
import httpProxy from "http-proxy-middleware";

export default function (app) {
    app.use(httpProxy('/api', { target: 'http://localhost:8080/', ws: true }));
}