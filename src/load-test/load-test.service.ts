import { Injectable } from '@nestjs/common';

@Injectable()
export class LoadTestService {

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

  private fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  async asyncCalculation(number: number) {
    // Simula una operación asíncrona con un retardo de 2 segundos
    const result = await this.delayCalculation(number);
    return {
      operation: `Cálculo asíncrono para el número ${number}`,
      result,
      message: 'Operación asíncrona completada exitosamente',
    };
  }

  private delayCalculation(number: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Ejemplo: retornar el cuadrado del número recibido
        resolve(number * number);
      }, 2000);
    });
  }
}
