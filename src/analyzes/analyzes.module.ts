import { Module } from '@nestjs/common';
import { analyzesProviders } from './analyzes.providers';

@Module({
  providers: [AnalyzesModule, ...analyzesProviders],
  exports: [AnalyzesModule],
})
export class AnalyzesModule {}
