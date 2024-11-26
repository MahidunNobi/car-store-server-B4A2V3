
# Car Store Backend System

The Car Store Backend System is a robust server application designed to streamline car store management. It empowers car managers to efficiently add, update, view, and remove vehicle listings. Additionally, it provides APIs for users to explore and place car orders, ensuring seamless integration and a user-friendly experience.


## Features

- Create a car document
- Get all the cars
- Get a single  car
- Update  a car
- Delete a car
- Make a order
- Get total revenue


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGODB_URL`


## Setup Locally

Make sure to add the environment variables propertly.

```bash
  git clone https://github.com/MahidunNobi/car-store-server-B4A2V3
  cd ./car-store-server-B4A2V3
  npm i
  npm run start:dev  
```
    
## API Reference

#### Get all cars

```http
  GET /api/cars
```

#### Get car

```http
  GET /api/car/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of car to fetch |


#### Create a car

```http
  POST /api/cars
```

| Body          | Type      | Description                                                                                          |
| :------------ | :-------- | :--------------------------------------------------------------------------------------------------- |
| `brand`       | `string`  | **Required**. Car brand name                                                                         |
| `model`       | `string`  | **Required**. Car model name                                                                         |
| `year`        | `number`  | **Required**. Year the car was published                                                             |
| `price`       | `number`  | **Required**. Car price                                                                              |
| `category`    | `string`  | **Required**. Car category. Must be one of: `Sedan`, `SUV`, `Truck`, `Coupe`, or `Convertible`       |
| `description` | `string`  | **Required**. Car description                                                                        |
| `quantity`    | `number`  | **Required**. Number of cars available in stock                                                     |
| `inStock`     | `boolean` | **Required**. Indicates if the car is currently in stock. Defaults to `true`         

#### Request Body
```javascript
{
  "brand": "Chevrolet",
  "model": "Corvette",
  "year": 2023,
  "price": 70000,
  "category": "Coupe",
  "description": "A stylish sports car with impressive speed and handling.",
  "quantity": 10,
  "inStock": true
}
```               


#### Update a car

```http
  PUT /api/cars/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of car to fetch |

#### Delete a car

```http
  DELETE /api/cars/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of car to fetch |


#### Order a car

```http
  POST /api/orders
```

| Body          | Type            | Description                                                       |
| :------------ | :-------------- | :---------------------------------------------------------------- |
| `email`       | `string`        | **Required**. Customer's email address. Must be unique.           |
| `car`         | `ObjectId`      | **Required**. Reference to the car ID from the `car` collection.  |
| `quantity`    | `number`        | **Required**. Number of cars being ordered.                       |
| `totalPrice`  | `number`        | **Required**. Total price for the order.                       |       

#### Request Body
```javascript
{
  "email": "customer@example.com",
  "car": "6743f35d529e1cdad375f6a9"
  "quantity": 3,
  "totalPrice": 27000
}
```   

#### Get total Revenue

```http
  GET /api/orders/revenue
```


