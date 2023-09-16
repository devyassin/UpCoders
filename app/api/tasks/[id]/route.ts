import connect from "@/database/database";
import Task from "@/models/Task";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const taskId = params.id;

    const task = await Task.findById({ _id: taskId });
    if (!task) {
      return NextResponse.json(
        { message: "Task not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ task });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const taskId = params.id;
    const task = await request.json();
    const updatedTask = await Task.findByIdAndUpdate({ _id: taskId }, task, {
      new: true,
    });

    if (!updatedTask) {
      return NextResponse.json(
        { message: "Task not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "task Updated", task: updatedTask });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const taskId = params.id;

    const task = await Task.findByIdAndDelete({ _id: taskId });
    if (!task) {
      return NextResponse.json(
        { message: "Task not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ task });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
