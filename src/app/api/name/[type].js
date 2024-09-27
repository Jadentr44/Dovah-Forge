import { NextResponse } from "next/server";
import names from '../data/names.json'
// To handle a GET request to /api
export async function GET(request) {
  const { id } = req.query; // Extract the variable from the query parameters
  // Do whatever you want
  return NextResponse.json({ message: names[`${id}_names`] }, { status: 200 });
}
