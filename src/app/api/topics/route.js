import { NextRequest, NextResponse } from "next/server";

import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

connectMongoDB();

export async function GET(request) {
  try {
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 201 });
}
