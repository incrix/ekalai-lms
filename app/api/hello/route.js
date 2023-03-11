import connectMongo from '../../../util/connectDB';

export async function GET(request) {
  connectMongo();
  return Response.json({hello: 'Hello, Next.js!'})
}

export async function POST(request) {
  const data = await request.json();
  connectMongo();
  console.log(data);
  return Response.json(data)
}
