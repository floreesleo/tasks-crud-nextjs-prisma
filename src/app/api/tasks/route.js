import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

// ESTAS FUNCIONES SON PARA OBTENER Y CREAR TAREAS NUEVAS
export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  const data = await request.json();
  const newTask = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });
  return NextResponse.json(newTask);
}
