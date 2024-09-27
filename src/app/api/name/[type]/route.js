import { NextResponse } from "next/server";
import names from '../../data/names.json'
// To handle a GET request to /api
export async function GET(req,{params}) {
  // const { type } = req.query; // Extract the variable from the query parameters
  console.log(params)
  // Do whatever you want
  return NextResponse.json(names[`${params.type}_names`], { status: 200 });
}
