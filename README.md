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
```

## How to Run
  npm install
  npm run dev

## Output
Tested using Postman
<img width="1597" height="962" alt="postman1" src="https://github.com/user-attachments/assets/a07987df-b9ee-4098-912d-cd4f8a5d1c98" />



