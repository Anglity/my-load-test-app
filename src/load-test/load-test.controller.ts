import { Controller, Get, Post, Body } from '@nestjs/common';
import { LoadTestService } from './load-test.service';

@Controller('api/load-test')
export class LoadTestController {
  constructor(private readonly loadTestService: LoadTestService) {}

  @Get()
  getLoadTest() {
    // Operación simple de carga
    return this.loadTestService.simpleCalculation();
  }

  @Get('heavy')
  getHeavyLoadTest() {
    // Simula una operación de carga pesada (cálculo de Fibonacci)
    return this.loadTestService.heavyCalculation();
  }

  @Post('calculate')
  calculate(@Body() payload: { number: number }) {
    // Simula una operación asíncrona con retardo
    return this.loadTestService.asyncCalculation(payload.number);
  }
}
