import { InputType, Field } from '@nestjs/graphql'
import { UserRole } from '@prisma/client'
import { IsNotEmpty, IsEmail, IsStrongPassword, IsEnum } from 'class-validator'

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsEmail({}, { message: 'Invalid email format' })
  email: string

  @Field(() => String)
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string

  @Field(() => String)
  @IsStrongPassword()
  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole
}
