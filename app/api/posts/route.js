// next: { revalidate: 60 } specifies that we'd like to revalidate our data every 60 seconds.

import { NextResponse } from "next/server";
export async function GET() {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return NextResponse.json(data);
}
