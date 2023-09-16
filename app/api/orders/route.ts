import connect from "@/database/database";
import { compareUserId, getDataFromToken } from "@/helpers/GetDataFromToken";
import Order from "@/models/Order";
import { OrderType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const orders: OrderType[] = await Order.find({ user_id: userId });

    return NextResponse.json({ size: orders.length, orders: orders });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const order: OrderType = await request.json();
    const sameUser = await compareUserId(request, order.user_id);
    if (!sameUser) {
      return NextResponse.json(
        { message: "not the same user !" },
        { status: 401 }
      );
    }
    const newOrder = new Order(order);
    const savedOrder = await newOrder.save();

    return NextResponse.json({ message: "order created", order: savedOrder });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
