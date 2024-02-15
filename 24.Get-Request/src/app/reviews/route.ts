import { reviewsTab } from "./data"


export async function GET(){
  return Response.json(reviewsTab)
}

//utiliser une new request avec lextension Thunder client http://localhost:3000/reviews. 