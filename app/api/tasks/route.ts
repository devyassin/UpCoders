import connect from "@/database/database";
import { compareUserId, getDataFromToken } from "@/helpers/GetDataFromToken";
import Task from "@/models/Task";
import { TaskType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const tasks: TaskType[] = await Task.find({ user_id: userId });

    return NextResponse.json({ size: tasks.length, tasks: tasks });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const task: TaskType = await request.json();
    const sameUser = await compareUserId(request, task.user_id);
    if (!sameUser) {
      return NextResponse.json(
        { message: "not the same user !" },
        { status: 401 }
      );
    }
    const newTask = new Task(task);
    const savedTask = await newTask.save();

    return NextResponse.json({ message: "task created", gig: savedTask });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
