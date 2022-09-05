import { Inject, Injectable } from '@nestjs/common';
import { ANALISIS_ENTITY } from 'src/global/entities-name';
import { JwtTokenType } from 'src/types/JwtTokenType';
import { AnalisisEntity } from './entities/analisis.entity';

@Injectable()
export class AnalyzesService {
  constructor(
    @Inject(ANALISIS_ENTITY)
    private readonly analisisRepository: typeof AnalisisEntity,
  ) {}

  create(token: JwtTokenType, certificateFile: File, signature: File) {
    return null;
  }
}
