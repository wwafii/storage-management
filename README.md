# StoreIt

StoreIt is a modern storage and file sharing application built with Next.js and TypeScript, utilizing Appwrite as the backend service. The app offers secure authentication, OTP email verification, seamless file storage, and easy file sharing capabilities between users.

## Features

- User authentication with secure login and registration
- OTP verification via email for enhanced security
- Store and manage files efficiently in user-specific storage
- Share files directly with other users within the platform
- Built with Next.js and TypeScript for improved development experience and performance
- Backend powered by Appwrite for scalable and secure cloud services
- Responsive and user-friendly interface

## Tech Stack

- TypeScript
- React
- Next Js
- Tailwind CSS
- Appwrite

## Cloning the Repository

```sh
git clone https://github.com/wwafii/storage-management.git
cd storage-management
```



## Installation

Install the project dependencies using npm:

```sh
npm install
```


## Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:
```sh
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
NEXT_PUBLIC_APPWRITE_DATABASE=
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=
NEXT_PUBLIC_APPWRITE_BUCKET=
NEXT_APPWRITE_KEY=
```


Replace the values with your actual AppWrite credentials.

## Running the Project

Start the development server:
```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.