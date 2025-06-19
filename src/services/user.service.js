"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByEmail = void 0;
var prisma_1 = require("../lib/prisma");
var getUserByEmail = function (email) {
    return prisma_1.prisma.user.findUnique({
        where: { email: email },
    });
};
exports.getUserByEmail = getUserByEmail;
