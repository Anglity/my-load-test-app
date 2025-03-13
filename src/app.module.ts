import { Module } from '@nestjs/common';
import { LoadTestModule } from './load-test/load-test.module';

@Module({
  imports: [LoadTestModule],
})
export class AppModule {}
