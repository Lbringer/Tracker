"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = exports.createNote = exports.updateTodo = exports.createTodo = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    usernmae: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.createTodo = zod_1.z.object({
    title: zod_1.z.string(),
});
exports.updateTodo = zod_1.z.object({
    done: zod_1.z.string(),
    id: zod_1.z.string(),
});
exports.createNote = zod_1.z.object({
    content: zod_1.z.string(),
});
exports.updateNote = zod_1.z.object({
    content: zod_1.z.string(),
    id: zod_1.z.string(),
});
