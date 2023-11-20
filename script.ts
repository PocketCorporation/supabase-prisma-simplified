import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.deleteMany()
    const user = await prisma.user.create({
      data: {
        name: "Kell",
        email: "Kell@test.com",
        age: 27,
        userPreference: {
          create: {
            emailUpdates: true,
          }
        }
      },
      include: {
        userPreference: true,
      }
    })
    console.log(user)
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })