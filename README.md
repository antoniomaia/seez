# Chuck Norris Fact Searcher
  
[seez.vercel.app](http://seez.vercel.app)

## Instructions

1. Navigate to [repo](https://github.com/antoniomaia/seez)
2. Clone locally using
   `git clone git@github.com:antoniomaia/seez.git`
3. Install dependencies using `npm install`
4. Start your server using `npm run dev`
5. Run tests using `npm run cy:run`, alternatively you can open Cypress using `npm run cy:open`
6. Navigate to app in [browser](http://localhost:3000)
7. Enjoy!

## Discussion

Used [Next.js](https://nextjs.org/) to bootstrap this project. Next.js provides a solution to some important aspects when building a web application from scratch.
Like bundling our code, production optimizations, also possible to statically pre-render pages for performance and SEO, including server-side rendering. 

I have been tinkering with this React Framework lately and this was great opportunity to put my knowledge in practice.
As a deployment platform, I will be using [Vercel](https://vercel.com/), built by the creators of Next.js. I used it before for a project, the experience of deploying a frontend app was great. Also, seamlessly integration with GitHub.

For styling, used the built-in CSS support, adding component-level CSS and using `styled-jsx` in a few cases.
Covered End to End Testing scenarios with [Cypress](https://www.cypress.io/).

## Requirements

#### Your task is to create a web application that allows users from different backgrounds to search Chuck Norris facts, using [the Chuck Norris facts API](https://api.chucknorris.io/).

I added the API route `pages/api/search.js` that handles a `json` response with the Chuck Norris facts returned from the external API.
We can use our API route requesting `http://localhost:3000/api/search?searchTerm={query}`, the only method supported is a `GET` request.

To make use of this functionality, the user types into an input field and based on that input new facts are fetch. Some requirements need to be
fulfilled like the length of the search term, an error message is shown accordingly. 

To ensure that the API calls don't execute too frequently, created a hook named `useDebounce` to prevent API calls from being fired on every keystroke.

#### Note: Keep in mind to also implement [right to left](https://en.wikipedia.org/wiki/Right-to-left) styles !

A UI theme was created, and a theme switcher using the React Context API. Context is useful when the data might need to be accessed at many components throughout our application,
some examples are the current UI theme or the UI language.

In the `Layout` component we set the `direction` CSS property with `'ltr' | 'rtl'`. Throughout the code we make use of `useTheme` to access the current theme and style 
appropriately. The concept of a theme was implemented because there are other customizations to be made, specially in terms of typography and spacing between the two use cases.

<br />

To enhance the user experience when the user starts searching for a Chuck Norris fact, the `scrollToRef()` method scrolls to the container 
so that the `results | loading | error` are visible to the user.

Audited the web application with [Lighthouse](https://developers.google.com/web/tools/lighthouse) to identify and fix common problems that affect performance, accessibility, and user experience.

#### Notes

In order to optimize even further our web application a few features come to mind.

- Dynamically import the React Components used to display our list of facts.
- Implement list virtualization, or "windowing", to only render what is visible to the user. This improves both the rendering and scrolling performance of the list.