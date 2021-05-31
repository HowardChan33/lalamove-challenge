# lalamove-challenge
# Project Requirement
Please refer to the following [link](https://github.com/lalamove/challenge/blob/master/freshgrad.md)

## Project Setup
For both linux and MacOS user,
they are required to use **sh** to open the setup.sh file

## Prerequisite:

**Node.js v.12.22.1** or later 
Users can install node.js with the following command:
**brew install node** for macOS user
**sudo apt install node** for linux user

**npm v.6.14.4** or later
Users can install npm with the following command:
**brew install npm** for macOS user
**sudo apt install npm** for linux user

### open method 
After pulling the file the repository, direct into the file with command prompt and user command **sh setup.sh**

After initialising the setup, users can start to use commands:

`llm create_order [from] [to] `returns a unique ID for the created order. from_location and to_location are required.

`llm list_orders `List all the available (non-taken) orders with this format ID,FROM,TO

`llm take_order [id]` take an available order

### Structure of the project 
```
.
├── README.md
├── Model
│   ├── createOrder.js
│   ├── listOrders.js
│   └── takeOrder.js
├── db
│   ├── database.js
│   └── llmdatabase.db
├── commands.js
├── package.json
├── setup.sh
└── test.sh


```
### Error code

```
**code 301 insertion error:** misuse of insertion command for example wrong datatype etc.
**code 302 incomplete query error:** database handle is closed, the query is incomplete or in wrong syntax.
**code 303 connection error:** unable to close due to unfinalized statements or unfinished backups, probably there is another application connection to the database.
**code 500 Internal server error:** Any other errors

```

### Database
```
Schema of the database

CREATE TABLE "orders" (
    "id"    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    "from_location"    TEXT,
    "to_location"    TEXT,
    "id"    INTEGER PRIMARY KEY,
    "isTaken"    TEXT DEFAULT 0
)

```


