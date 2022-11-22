É importante ter o acesso ao um Serviço de Cache REDIS

Para rodar o serviço via DOCKER execute o seguinte comando:
```shell
  docker run --name redis -d redis redis-server --save 60 1 --loglevel warning
  docker network create oberom-network
  ​​docker run -it --network oberom-network --rm redis redis-cli -h redis
```
