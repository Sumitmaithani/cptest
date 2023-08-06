import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Course from "@/models/course";

connectMongoDB();

export async function GET() {
  try {
    const courses = await Course.find();
    return NextResponse.json({ courses }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Course deleted" }, { status: 201 });
}
