import connect from "@/database/database";
import Order from "@/models/Order";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = params.id;

    const order = await Order.findById({ _id: orderId }).populate("gig_id");

    if (!order) {
      return NextResponse.json(
        { message: "Order not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ order });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = params.id;
    const task = await request.json();
    const updatedOrder = await Order.findByIdAndUpdate({ _id: orderId }, task, {
      new: true,
    });

    if (!updatedOrder) {
      return NextResponse.json(
        { message: "Order not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "order Updated", task: updatedOrder });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = params.id;

    const order = await Order.findByIdAndDelete({ _id: orderId });
    if (!order) {
      return NextResponse.json(
        { message: "Order not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ order });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
