import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { UserService } from './user.service'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User, { nullable: true })
  async createUser(@Args('data') createUserInput: CreateUserInput) {
    console.log('data', createUserInput)
    return await this.userService.create(createUserInput)
  }

  @Query(() => [User])
  async findAll() {
    return await this.userService.findAll()
  }

  @Query(() => User, { nullable: true })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id)
  }

  @Mutation(() => User, { nullable: true })
  async updateUser(
    @Args('id', { type: () => String }) id: string,
    @Args('data') updateUserInput: UpdateUserInput
  ) {
    return await this.userService.update(id, updateUserInput)
  }

  @Mutation(() => User, { nullable: true })
  deleteUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.deleteById(id)
  }
}
