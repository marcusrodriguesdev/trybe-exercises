## Exercício 1
---
  - item 2:
    ```item2
    $ docker run -d --name missao-trybe -p 4545:80 httpd:2.4
    ```

  - item 3:
    ```item3
    $ http:localhost:4545/missao_trybe.html
    ```

  - item 5:
    ```item5
    $ docker container ls
    ```
  
  - item 6:
    ```item6
    $ docker inspect <ID_CONTAINER>
    ```

  - item 7:
    ```item7
    $ docker stop <NOME_CONTAINER> OU <ID_CONTAINER>
    ```

  - item 8:
    ```item8
    $ docker --rm <NOME_CONTAINER> OU <ID_CONTAINER>
    ```

  - item 10: 
    ```item10
    $ docker image list
    ```

  - item 11: 
    ```item11
    $ docker rmi -f <ID_IMAGEM>
    ```