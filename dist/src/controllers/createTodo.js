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
exports.createTodo = void 0;
const schemas_1 = require("../schemas");
const prisma_1 = __importDefault(require("../prisma"));
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //validate request body
        const parsedBody = schemas_1.CreateTodoSchema.safeParse(req.body);
        if (!parsedBody.success) {
            res.status(400).json({
                message: "Invalid request body",
                error: parsedBody.error.errors
            });
            return;
        }
        //create todo
        const todo = yield prisma_1.default.todo.create({
            data: parsedBody.data
        });
        console.log("Todo created successfully", todo);
        res.status(201).json({
            message: "Todo created successfully",
            todo
        });
        return;
    }
    catch (err) {
        next(err);
    }
});
exports.createTodo = createTodo;
exports.default = exports.createTodo;
