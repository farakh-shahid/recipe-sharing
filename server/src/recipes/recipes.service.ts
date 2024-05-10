import { Injectable } from '@nestjs/common'
import { CreateRecipeInput } from './dto/createRecipe.dto'
import { UpdateRecipeInput } from './dto/updateRecipe.dto'

@Injectable()
export class RecipesService {
  create(createRecipeInput: CreateRecipeInput) {
    return 'This action adds a new recipe'
  }

  findAll() {
    return `This action returns all recipes`
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`
  }

  // update(id: number, updateRecipeInput: UpdateRecipeInput) {
  //   return `This action updates a #${id} recipe`
  // }

  remove(id: number) {
    return `This action removes a #${id} recipe`
  }
}
