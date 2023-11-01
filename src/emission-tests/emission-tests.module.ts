import { Module } from '@nestjs/common';
import { EmissionTestsService } from './emission-tests.service';
import { EmissionTestsController } from './emission-tests.controller';
import { EmissionTest, EmissionTestSchema } from './emission-test.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EmissionTest.name, schema: EmissionTestSchema },
    ]),
  ],
  controllers: [EmissionTestsController],
  providers: [EmissionTestsService],
})
export class EmissionTestsModule {}
