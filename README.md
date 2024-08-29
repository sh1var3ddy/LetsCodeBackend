#LetsCode Prblem Setting service


--------------------------------

## How routing is working in the project

- /api/problems/ping
    - because the routes starts with /api
      /api       -> v1      -> problems       -> ping 
      apiRouter -> v1Router -> problemRouter -> problemController -> service layer