import { Module } from '@nestjs/common'
import { RecipesService } from './recipes.service'
import { RecipesResolver } from './recipes.resolver'
import { PrismaService } from 'src/prisma.service'

@Module({
  providers: [RecipesResolver, RecipesService, PrismaService]
})
export class RecipesModule {}
