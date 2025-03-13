"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTestService = void 0;
const common_1 = require("@nestjs/common");
let LoadTestService = class LoadTestService {
    simpleCalculation() {
        const a = 42;
        const b = 8;
        const result = a * b;
        return {
            operation: `${a} * ${b}`,
            result,
            message: 'Operación simple completada exitosamente',
        };
    }
    heavyCalculation() {
        // Simula un cálculo intensivo: calcular el n-ésimo número de Fibonacci recursivamente.
        const n = 40;
        const fib = this.fibonacci(n);
        return {
            operation: `Fibonacci(${n})`,
            result: fib,
            message: 'Cálculo pesado completado exitosamente',
        };
    }
    fibonacci(n) {
        if (n <= 1) {
            return n;
        }
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
    async asyncCalculation(number) {
        // Simula una operación asíncrona con un retardo de 2 segundos
        const result = await this.delayCalculation(number);
        return {
            operation: `Cálculo asíncrono para el número ${number}`,
            result,
            message: 'Operación asíncrona completada exitosamente',
        };
    }
    delayCalculation(number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Ejemplo: retornar el cuadrado del número recibido
                resolve(number * number);
            }, 2000);
        });
    }
};
LoadTestService = __decorate([
    (0, common_1.Injectable)()
], LoadTestService);
exports.LoadTestService = LoadTestService;
//# sourceMappingURL=load-test.service.js.map