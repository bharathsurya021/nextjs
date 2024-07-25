# Next.js Application Routing Guide

## Table of Contents

- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [Routing in Next.js](#routing-in-nextjs)
  - [Static Routes](#static-routes)
  - [Dynamic Routes](#dynamic-routes)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Switch to the Routing Branch](#switch-to-the-routing-branch)
  - [Install Dependencies](#install-dependencies)
  - [Run the Application](#run-the-application)

## Introduction

This guide explains how routing works in a Next.js application and provides instructions on how to set up and run the application from a Git repository.

## Folder Structure

The folder structure of this application is as follows:

```
src/
  └── app/
      ├── about/
      │   └── page.tsx
      ├── blog/
      │   ├── first/
      │   │   └── page.tsx
      │   └── second/
      │       └── page.tsx
      ├── profile/
      │   └── page.tsx
      ├── products/
      │   └── [productId]/
      │       └── page.tsx
      └── page.tsx (home route)
```

## Routing in Next.js

In Next.js, the file system is used to define routes. Each file in the `pages` directory (or `app` directory if using the App Router) becomes a route.

### Static Routes

Static routes are straightforward and map directly to the file structure.

Examples:

- `src/app/page.tsx` is the home route (`/`).
- `src/app/about/page.tsx` is the about route (`/about`).
- `src/app/profile/page.tsx` is the profile route (`/profile`).
- `src/app/blog/first/page.tsx` is a nested route under blog (`/blog/first`).
- `src/app/blog/second/page.tsx` is another nested route under blog (`/blog/second`).

### Dynamic Routes

Dynamic routes allow you to match a URL segment and use it in your component. This is particularly useful for creating pages that display dynamic content based on the URL.

Example:

- `src/app/products/[productId]/page.tsx` is a dynamic route for products. This route will match URLs like `/products/1`, `/products/2`, etc.

In the `[productId]` folder, the `page.tsx` file can use the `useRouter` hook from Next.js to access the `productId` parameter and render content dynamically based on it.

Here’s an example of how you can dynamically render content in `src/app/products/[productId]/page.tsx`:

```jsx
// src/app/products/[productId]/page.tsx
export default function ProductDetails({
  params,
}: {
  params: { productId: string },
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Product {params.productId} Details &nbsp;
        </h1>
      </div>
      <h2>
        Info: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        atque aut! Illo qui soluta quae, eveniet cupiditate quasi modi quas
        libero vitae sint. Iste nihil magni voluptas optio, minus molestiae.
      </h2>
    </main>
  );
}
```

## Getting Started

Follow these steps to get the application up and running.

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
```

### Switch to the Routing Branch

Navigate to the cloned repository and switch to the `features/routing` branch:

```bash
cd <repository-name>
git checkout features/routing
```

### Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### Run the Application

Finally, start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`. You can now navigate to different routes defined in the `src/app` directory.

## Conclusion

This guide provided an overview of the routing system in Next.js and detailed steps to set up and run the application. For more information on Next.js routing, refer to the [Next.js documentation](https://nextjs.org/docs/routing/introduction).

```

Replace `<repository-url>` and `<repository-name>` with the appropriate values for your repository.
This README now includes information on both static and dynamic routing in Next.js, along with the updated folder structure and instructions for setting up and running the application.
```
