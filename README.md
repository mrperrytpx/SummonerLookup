# Summoner Lookup

## Summoner Lookup is a web app used to look up stats, match history and challenges of League of Legends players, made with React

### [Client](https://summonerlookup-production-fe40.up.railway.app) ------ [Server Swagger docs](https://slup-server-production.up.railway.app/docs)

Web app that lets you look up specific players who play League of Legends and see their match history, champion stats in ranked queues, if they're in an ongoing game and their completed challenges. 

You are able to make an account and 'follow' any of the players so you don't have to remember their names; if you find someone interesting but you might forget their name.

![Summoner Overview](/readme/overview.png "Overview of a profile" =200x200)
![Summoner Stats](/readme/stats.png "Champion stats in ranked queues" =200x200)

Essentially, it's a lesser version of any of the popular websites such as u.gg or op.gg

## Client

Client side was created using [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) as the starting point of the project. Folder structure for components is using the [Atomic Design](https://danilowoz.com/blog/atomic-design-with-react) methodology - smallest components are Atoms, Atoms make bigger components; Molecules, Molecules and Atoms make Organisms and all of them together make Pages.

Other libraries used on the client-side:
* [React-Router-Dom](https://reactrouter.com/en/main) - lightweight, fully-featured routing library for React
* [TanStack Query](https://tanstack.com/query/v4) - framework agnostic asynchronous state management library
* [TanStack Table](https://tanstack.com/table/v8) - headless UI for building powerful tables & datagrids
* [styled-components](https://styled-components.com/) - CSS-in-JS styling library
* [React-Hook-Form](https://react-hook-form.com/) - performant, flexible and extensible forms with easy-to-use validation
* [Yup](https://github.com/jquense/yup) - schema builder for runtime value parsing and validation, paired with React-Hook-Form
* [React-Icons](https://react-icons.github.io/react-icons) - a "one-stop-shop" for all of the popular icons




## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.