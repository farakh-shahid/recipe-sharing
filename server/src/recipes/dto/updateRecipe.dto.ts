import { CreateRecipeInput } from './createRecipe.dto'
import { InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateRecipeInput extends PartialType(CreateRecipeInput) {}
