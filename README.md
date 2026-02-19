# REST API for Playing Card Collection

## Aim
To develop a RESTful API for managing playing card collections using Express.js.

## Technologies Used
- Node.js 18+
- Express.js
- Postman
- MongoDB (Optional)

## API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/cards | Get all cards |
| POST | /api/cards | Add a new card |
| PUT | /api/cards/:id | Update a card |
| DELETE | /api/cards/:id | Delete a card |

## Sample POST Request
```json
{
  "suit": "diamonds",
  "value": "queen",
  "collection": "royal"
}

## How to Run
  npm install
  npm run dev

## Output
Tested using Postman
![alt text](../postman1.png)