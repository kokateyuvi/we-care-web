import { Task } from "@/models/taskModel";
import { NextResponse } from "next/server";
import connect from "../../../../db";

export async function POST(request) {
  try {
    connect();

    // Fetch all tasks from the database using the Task model
    const tasks = await Task.find();

    // Send a success response with the fetched task data
    return NextResponse.json(
      {
        message: "Tasks fetched successfully",
        status: true,
        tasks: tasks,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching tasks:", error);

    // Handle errors and send an error response
    return NextResponse.json(
      {
        message: `Failed to fetch tasks: ${error.message}`,
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}
