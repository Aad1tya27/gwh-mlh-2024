"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
var Status;
(function (Status) {
    Status[Status["Sent"] = 200] = "Sent";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
app.get("/", (req, res) => {
    res.status(Status.Sent).send("I love Chipotle Chicken Quesadillas!!");
});
app.listen(3000, () => {
    console.log("server created, http://localhost:3000");
});
