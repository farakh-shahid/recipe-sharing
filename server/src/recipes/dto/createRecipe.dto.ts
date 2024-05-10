import { InputType, Field, Int, registerEnumType } from '@nestjs/graphql'
import { Category } from '@prisma/client'
import { IsEnum, IsString } from 'class-validator'

@InputType()
export class CreateRecipeInput {
  @Field(() => String)
  title: string

  @Field(() => String)
  description?: string

  @Field(() => [String], { nullable: true })
  ingredients: string[]

  @Field(() => [String], { nullable: true })
  instructions: string[]

  @Field(() => Int)
  cookingTime: number

  @IsString({ each: true })
  @Field(() => [String], { nullable: true })
  tags?: string[]

  @Field(() => [Category], { nullable: true })
  category: Category[]

  @Field(() => Int, { defaultValue: 0 })
  likes?: number

  @Field({ nullable: true })
  nutritionalInfo?: string

  @Field(() => String)
  chefId: string

  @Field({ nullable: true })
  imageUrl?: string

  @Field({ nullable: true })
  videoUrl?: string

  @Field(() => Int, { defaultValue: 0 })
  shares?: number
}

registerEnumType(Category, {
  name: 'Category'
})
