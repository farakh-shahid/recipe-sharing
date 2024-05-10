import { Injectable } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { Prisma, User } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserInput: CreateUserInput) {
    const { name, email } = createUserInput
    try {
      const user = await this.prisma.user.create({
        data: {
          ...createUserInput
        }
      })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }
  async findAll() {
    return await this.prisma.user.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } })
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) {
      return
    } else {
      const updatedUser = await this.prisma.user.update({
        where: { id },
        data: updateUserInput
      })

      return updatedUser
    }
  }

  async deleteById(id: string) {
    return await this.prisma.user.delete({ where: { id } })
  }
}
