import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

<<<<<<< Updated upstream
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
=======
        if(!userId){
            return new NextResponse("Unauthorized",{status: 401}); 
        }

        const course = await db.course.create({
            data:{
                userId,
                title,
            }
        });

        return NextResponse.json(course);
    }catch(error){
        console.log("[COURSES]",error);
        return new NextResponse("Internal Error",{status:500});
>>>>>>> Stashed changes
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
