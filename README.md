# AtDrive - Node JS Test




## Installation

Install project with npm

```bash
  npm install
  cd atdv
  Configure .env file with your credentials
  npm start Or npm run dev (To run in development mode)

```
    
## API Reference

#### Save all repositories of an Organization/Owner

```http
  POST /api/fetchData
```

| Parameter | Type: In     | Description                |
| :-------- | :------- | :------------------------- |
| `owner` | `string`: `Body` | **Required**. Organization/Owner name of Github account.  |

#### Get Repository Data by Id 

```http
  GET /api/getData/${id}
```

| Parameter | Type: In| Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`: `Params` | **Required**. Id of data saved in our table |

#### Get All records from the table

```http
  GET /api/getAllData
```

| Parameter | Type: In| Description                       |
| :-------- | :------- | :-------------------------------- |
| `None`      | `None`: `None` | Get All records available in the table |

## Authors

- [@Faizan-Siddiqui1](https://github.com/Faizan-Siddiqui1)

