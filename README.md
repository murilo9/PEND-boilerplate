## Observations

- Migrations must be built before running! That's because migrations are run from the
  /dist folder, not the /src folder.

## CRUD Testing

- To PUSH a fruit (a banana):

```
  curl -X POST -d '{"name":"banana", "color":"yellow", "weight":0.2}' -H "Content-Type application/json" http://localhost:3000/fruits
```
