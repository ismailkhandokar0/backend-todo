"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodoSchema = exports.UpdateTodoSchema = exports.CreateTodoSchema = void 0;
const zod_1 = require("zod");
exports.CreateTodoSchema = zod_1.z.object({
    taskName: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    dueDate: zod_1.z.string(),
    category: zod_1.z.string(),
});
exports.UpdateTodoSchema = zod_1.z.object({
    id: zod_1.z.number(),
    taskName: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    dueDate: zod_1.z.string(),
    category: zod_1.z.string(),
});
exports.DeleteTodoSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
