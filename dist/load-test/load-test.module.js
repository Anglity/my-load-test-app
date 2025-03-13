"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTestModule = void 0;
const common_1 = require("@nestjs/common");
const load_test_controller_1 = require("./load-test.controller");
const load_test_service_1 = require("./load-test.service");
let LoadTestModule = class LoadTestModule {
};
LoadTestModule = __decorate([
    (0, common_1.Module)({
        controllers: [load_test_controller_1.LoadTestController],
        providers: [load_test_service_1.LoadTestService],
    })
], LoadTestModule);
exports.LoadTestModule = LoadTestModule;
//# sourceMappingURL=load-test.module.js.map