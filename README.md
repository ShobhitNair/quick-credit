
# Mini-Loan App
Welcome to the Quick Credit Loan App project! 


### Extra Features
- Authorization, Authentication using JWT having both user and admin side (Login, SignUp) with all sort of Error Handling 
- Responsiveness, mobile friendly
- UI (Tailwind and Scss)
- Clean Folder Structure.


## Tech Stack Used

- **Frontend**: React.js
- **Backend**: Node.js (Express)
- **Database**: MongoDB(Compass,Atlas)
- **Styling**: TailwindCSS, Scss
- **API Testing**: POSTMAN

## Project Folder Structure

- **client** : Contains all Frontend Code.
- **server** :  Contains all Backend Code.
- **README.md**: README.md, including information for reviewers to run and use the app.



## How to Run the code:

- Should have Nodejs app installed in your system.
- Should have the MongonDB Atlas/Compass or MONGO_URL for database storage.


cd mini-loan-app
# or any other folder name
```
### Backend Setup
Create a .env file in the server folder and add:

```
PORT = 4000
MONGO_URI=your_mongo_db_url
JWT_SECRET=your_jwt_secret_code
```
Set up and run the backend:
```
# Navigate to the backend directory
cd server

# Install dependencies
npm install

# Start the backend server
npm start
```
### Frontend Setup

Navigate to the frontend directory:
```
cd client
```

Install dependencies and start the React app:

```
# Install dependencies
npm install

# Start the React app
npm start
```


