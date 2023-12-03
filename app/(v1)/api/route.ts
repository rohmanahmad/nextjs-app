export function GET(request: Request, {params}) {
  try {
    const url = new URL(request.url)
    return new Response(JSON.stringify({mantab: 'Hello Sippp', params}), {status: 200})
  } catch (err) {
    return new Response(err.message, {status: 500})
  }
}