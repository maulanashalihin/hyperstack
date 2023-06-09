
# Hyperstack

Full stack boilerplate for your next project. Equipped with the best and easiest web technology.


## Tech Stack

**Client:** Svelte, Inertia, TailwindCSS, Webpack Encore

**Server:** Node, Hyper Express (powered by uWebsockets.js), Typescript

**Database** : Knex.js, Redis

**Testing** : Cypress


## Installation

Clone this repo and install packages

```bash
  git clone https://github.com/maulanashalihin/hyperstack.git
  npm install
  cp .env.example .env
  npm run dev
```
    
## Documentation

You can study the stacks in the repository in the respective library documentation.

[1. Hyper Express](https://github.com/kartikk221/hyper-express/blob/master/docs/Examples.md)


[2. Svelte](https://learn.svelte.dev/tutorial/welcome-to-svelte)


[3. Inertia](https://inertiajs.com/)


[4. TailwindCSS](https://tailwindcss.com/)


[5. Knex.js](https://knexjs.org/)


[6. Redis](https://github.com/redis/node-redis)


[7. Cypress](https://www.cypress.io/)


###  Generator

you can create controller, command, migration files via command line. this will speed up your process in application development.

#### 1. Generate Controller
```bash
  node ace make:controller ControllerName
```

#### 2. Generate Command
```bash
  node ace make:command CommandName
```
command file will be generated in commands folder. you can execute the file with `ts-node commands/CommandFile.ts` or `node build/commands/CommandFile.js`


#### 2. Generate Migration
```bash
  knex migrate:make MigrationName
```
you can create migration files and seeder file with using native knex cli. you can learn it further here. https://knexjs.org/guide/migrations.html

    


### Folder Structure

    .
    ├── app                     # Main App (mostly touch files)
    │   ├── controllers         # controllerss
    │   ├── middlewares         # request interceptor
    │   └── services            # reusable services such as connecting to DB and Redis Service
    ├── benchmark               # Source files to compare this framework
    ├── build                   # compiled JS files
    ├── commands                # files to use as command line service
    ├── migrations              # create, alter and drop DB tables
    ├── public                  # static file of your apps
    ├── resources               # front end files
    │   ├── js                  # js folders
    │   └── views               # server side rending files
    ├── routes                  # route configuration
    ├── env.example
    ├── .gitignore
    ├── ace
    ├── clean
    ├── knexfile.ts
    ├── nodemon.json
    ├── package.json
    ├── postcss.config.js
    ├── sync_version
    ├── tailwind.config.js
    ├── tsconfig.json
    └── webpack.config.js
### Server Side Rendering (SSR)
you can create server side rendering app using svelte. just include svelte files in views folder and pass the file in route or controller like this

    Route.get("/hello",async (request,response)=>{  

        request.view("hello.svelte",{name : "Maulana Shalihin"})

    })
    
### Inertia
create https://inertiajs.com/ with by passing the inertia file in Pages folder like this.

    public async loginPage (request,response) { 
 
        return response.inertia("auth/login")
    
    }

### Route to Controller
you can create server side rendering app using svelte. just include svelte files in views folder and pass the file in route or controller like this

    import UserController from "../app/controllers/UserController"; 

    Route.get("/user",UserController.index);
    
### Benchmark Results
**Note!** these benchmarks should be **run over network for proper results** as running these benchmarks on localhost significantly strains the C++ to Javascript communications and class initializations performance due to near **no latency** in request times which is **unrealistic for real world scenarios**.

|                          | Version | Requests/s | Latency | Throughput/s |
| :--                      | --:     | :-:        | --:     | --:          |
| uWebsockets.js           | 20.8.0  | 196,544    | 464 ms  | 102 Mb/s     |
| HyperExpress             | 6.0.0   | 195,832    | 469 ms  | 101 Mb/s     |
| Fastify                  | 3.28.0  | 13,329     | 746 ms  | 8 Mb/s      |
| Express                  | 4.17.3  | 5,608      | 1821 ms | 3.7 Mb/s     |