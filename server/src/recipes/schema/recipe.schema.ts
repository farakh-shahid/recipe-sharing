import { ObjectType, Field, Int } from '@nestjs/graphql'
import graphqlTypeJson from 'graphql-type-json'
import { Category } from '@prisma/client'

@ObjectType()
export class Recipe {
  @Field(() => String)
  id: string

  @Field(() => String)
  title: string

  @Field(() => String, { nullable: true })
  description: string

  @Field(() => [String])
  ingredients: string[]

  @Field(() => [String])
  instructions: string[]

  @Field(() => Int)
  cookingTime: number

  @Field(() => [String], { nullable: true })
  tags: string[]

  @Field(() => [Category], { nullable: true })
  category: Category[]

  @Field(() => graphqlTypeJson, { nullable: true })
  nutritionalInfo: object

  @Field(() => String, { nullable: true })
  imageUrl: string

  @Field(() => String, { nullable: true })
  videoUrl: string

  @Field(() => Int)
  likes: number
}
