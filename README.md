# How to run the app?

In order to run the app, make sure you're in the root directory and type the command below;

```
npm install
npm run dev
```

Browse to [http://localhost:3000](http://localhost:3000)

## Important

- 'npm run dev' will concurrently run two servers one to serve as the web server and the other as an API server.
- Data is coming from Mongo Atlas
- All the data from the frontend to backend has been done by a proxy.

## Testing

- Jest and Enzyme (needs improvement)
- Minor snapshot tests are available too (needs improvement)

## Design considerations

Currently query strings are being procued by user from the frontend and processed by a route handler in Express.
Where creating dynamic Query strings works well for this app, this may not be extendable, so the better approach could be
to utilize a filter that forces users into a new category after choosing it.

This code has been written merely for the specification of handling all the combinations of Name, Age and Gender.

There is a much room for improvement :) there always is....
