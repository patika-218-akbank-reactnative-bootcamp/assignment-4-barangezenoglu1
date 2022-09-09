# assignment-4-barangezenoglu1
assignment-4-barangezenoglu1 created by GitHub Classroom

## What is this project ?
It's a basic movie list app. 

## What can be done with this app ? 

-Register

-Login

-Logout

-List rated, popular, incoming movies in home page

-Search movies by title

-Edit current user profile

-Change theme

## Getting Started
First, download packages and dependencies with :

### `npm install`

After that start the Metro :

### `npx react-native start`

Last, start your application:

### `npx react-native run-android`

## Packages

- @react-native-async-storage/async-storage
- @react-navigation/bottom-tabs
- @react-navigation/native
- @react-navigation/native-stack
- @reduxjs/toolkit
- axios
- react-native-vector-icons
- react-redux
## Folder Structure
    ├── android                 # Android bundle
    ├── ios                     # IOS bundle
    ├── node_modules            # Node module Files
    ├── src                     # Source files 
    │   ├── assets              # Project asset files
    │   ├── components          # Components
    │   └── data                # Json server
    │   ├── features            # Redux slices
    │   └── hooks               # Custom hooks
    │   └── screens             # Screens files
    │   └── screenshots         # Screenshots
    │   └── store               # Redux reducers
    
## Screens 
- Login Screens
<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Welcome.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Register.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Login.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
</p>
If you registered or logged you will redirect to home page when app open until you logout. You can't register if your passwords are not same. You can login if you already registered.

- Home Screen
<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Home.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Home2.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Home3jpeg.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Darkmode3.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
</p>
You can see three genres for listing movies. You can change these genres with press any genres tab. The movie list is scrollable. When you click any movie, you will go movie details.
- Search Screen
<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Search.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Darkmode2.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
</p>
You can use bottom navigation for open search screen. In this screen you can list movies with type movie name. If you click any movie you will go movie detail as in home screen.
- Movie Detail
<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/MovieDetail.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Darkmode4.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
</p>
You can open movie detail screen with click or press to a movie. 
- Profile
<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Profile.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-barangezenoglu1/blob/main/src/screenshots/Darkmode1.jpeg?raw=true" alt="Welcome.jpeg" width="200" height="400" style="padding-right:10px" />
</p>
In profile screen you can change theme with switch, edit user info and logout. If you edit user, the global user data and async storage data will change. After the logout you will redirect to welcome page.
