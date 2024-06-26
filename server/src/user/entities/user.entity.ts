import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field()
  email: string
}
