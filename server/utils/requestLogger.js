import DateTime from "./dateTime";

require("colors");

export default class RequestLogger {
    static httpLog(req) {
        const remote = req.connection.remoteAddress;
        console.log(`[Http] 200 ${DateTime.getDateTimeStr()} ${remote} - ${req.url}`);
    }

    static http404Log(req) {
        const remote = req.connection.remoteAddress;
        console.error(`[Http] 404 ${DateTime.getDateTimeStr()} ${remote} - ${req.url}`.yellow);
    }

    static ws(message) {
        console.log(`[WS] ${DateTime.getDateTimeStr()} ${message}`.cyan);
    }

    static wsError(message) {
        console.log(`[WS] ${DateTime.getDateTimeStr()} ${message}`.magenta);
    }

    static wsInfo(message) {
        console.log(`[WS] ${DateTime.getDateTimeStr()} ${message}`.green);
    }
}