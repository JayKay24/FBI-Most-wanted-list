# FBI-Most-wanted-list
Web application that integrates with FBI Most wanted API to display a list of most wanted profiles.

## Dependencies
1. [Docker](https://www.docker.com/)
2. [Node20+](https://nodejs.org/en)

## Running the application locally
The above dependencies are mandatory. To run the application locally, follow these steps:

1. `$ git clone https://github.com/JayKay24/FBI-Most-wanted-list.git`
2. `$ cd FBI-Most-wanted-list`
3. Make sure docker is up and running
4. `cd client`
5. `docker build -t <YOUR_PREFERRED_USERNAME>/<YOUR_PREFERRED_CLIENT_IMAGE_NAME>:1.0.0 .`
6. `cd ..`
7. `cd server`
8. `docker build -t <YOUR_PREFERRED_USERNAME>/<YOUR_PREFERRED_SERVER_IMAGE_NAME>:1.0.0 .`
9. `cd ..`
10. Inside the docker-compose.yml file, replace the images referenced under the server and client sections with the full image names you provided in steps 4 and 6. You can run `$ docker image ls` to view your most recent image names that you built earlier.
11. Inside the root directory of the project, run `docker compose up` to start up the entire application. The client will be running on `http://localhost:3001` while the server is running on `http://localhost:3000/api/wanted`
12. To stop the application, run `docker compose down`.

Note:

1. Ensure to use lowercase for your preferred image names when running docker build e.g `docker build -t <lowercase>/<lowercase>:1.0.0 .`
2. Ensure your preferred image names are unique and different from each other e.g client image name should be different from server image name

## Running tests locally

### Frontend
```
$ cd client
$ npm install // only run this if you haven't installed the npm  dependencies locally
$ npm run test
```

### Backend
To do.

## Notes

* The application will wait for a maximum of 2 minutes to hydrate the empty mongodb database initially. This is because I'm running an etl process to fetch and store the items from the FBI API first to avoid calling the API on every request.
* I plan on increasing the test coverage as time goes on. At the moment I've only tested two frontend components. Backend unit testing is yet to be implemented.
* I plan to further secure the application as time goes on. At the moment, there is no authentication or authorization procedures. The db connection string is stored inside a js config file; so no environment variables yet.
* I plan to implement proper observerbility practices e.g leveraging the ELK stack to log critical events like errors. I also plan to implement monitoring of key metrics like CPU usage, number of requests per day that hit the `/api/wanted` endpoint, error rates of key functionality e.g etl process failing to run periodically, etc.
* I plan to implement caching to increase the performance and resiliency of the application. This will add complexity to maintain the application and also make the application less consistent depending on how long items remain in the cache. Ideally, items should be purged soon after the etl process has processed and loaded fresher most wanted profiles in our db.
* I plan to implement more detailed error boundaries in the frontend. At the moment, I have implemented a global error boundary wrapping the entire component tree with a general error message. (Oops, something went wrong. Please check back again soon)
* I plan on improving the search feature on the frontend; currently, it is possible to send a search query for an empty string to the backend, which will return an unfiltered, paginated response, similar to loading the application for the first time.
* I plan to implement a filter feature using a select HTML element. This would complement the search feature to narrow down the results.

## Loom video

See video of how it works [here](https://www.loom.com/share/fcbb8f20b05a4d45b6affbcfc8671180?sid=54e1faca-9968-4bb5-a5e0-650552ea6116).