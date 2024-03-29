import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getdatafromtoken";

connect();

export async function POST(request: NextRequest) {
  // extract data from token
  const userId = await getDataFromToken(request);

  console.log(userId);

  const user = await User.findOne({ _id: userId }).select("-password");
  console.log(user);
  //check if there is now user
  return NextResponse.json({
    message: "User Found",
    data: user,
  });
}
