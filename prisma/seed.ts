import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
}
enum specializations  {
    languages = 'Languages',
    math = "Math",
    science = "Science",
    music = "Music",
    lifeCoaching = "Life Coaching"    
}

async function main() {
    await prisma.user.deleteMany({})
    await prisma.lesson.deleteMany({})
    await prisma.message.deleteMany({})
    await prisma.tutor.deleteMany({})
    await prisma.conversation.deleteMany({})
    await prisma.account.deleteMany({})

    const john = await prisma.user.create({
        data:{
            name:'john',
            email:'john@email.com',
        }
    })

    const tutorUser = await prisma.user.create({
        data:{
            name:'tutor',
            email:'tutor@email.com',
        }
    })

    const tutor = await prisma.tutor.create({
        data:{
            user:{
                connect:{id:tutorUser.id}
            },
            
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            specialization: specializations.languages,
            pricePerLesson: 8,
            rating:0,
        }
    })

    const newLesson = await prisma.lesson.create({
        data:{
           date:addDays(new Date,5),
           price:tutor.pricePerLesson,
            student:{
                connect:{id:john.id}
            },
            tutor:{
                connect:{id:tutor.id,}
            },
        }
    }) 

    
}


main()
  .catch((e: Error) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    // Disconnect Prisma Client
    await prisma.$disconnect()
  })

  export {}