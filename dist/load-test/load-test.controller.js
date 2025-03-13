"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTestController = void 0;
const common_1 = require("@nestjs/common");
const load_test_service_1 = require("./load-test.service");
let LoadTestController = class LoadTestController {
    constructor(loadTestService) {
        this.loadTestService = loadTestService;
    }
    getLoadTest() {
        // Operación simple de carga
        return this.loadTestService.simpleCalculation();
    }
    getHeavyLoadTest() {
        // Simula una operación de carga pesada (cálculo de Fibonacci)
        return this.loadTestService.heavyCalculation();
    }
    calculate(payload) {
        // Simula una operación asíncrona con retardo
        return this.loadTestService.asyncCalculation(payload.number);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoadTestController.prototype, "getLoadTest", null);
__decorate([
    (0, common_1.Get)('heavy'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoadTestController.prototype, "getHeavyLoadTest", null);
__decorate([
    (0, common_1.Post)('calculate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoadTestController.prototype, "calculate", null);
LoadTestController = __decorate([
    (0, common_1.Controller)('api/load-test'),
    __metadata("design:paramtypes", [load_test_service_1.LoadTestService])
], LoadTestController);
exports.LoadTestController = LoadTestController;
//# sourceMappingURL=load-test.controller.js.map