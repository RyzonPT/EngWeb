#!/bin/bash
docker build . -t mysqlpassadeira
echo 'Tagging'
docker tag mysqlpassadeira:latest bragamann/mysqlpassadeira:Jun9
echo 'Pushing'
docker push bragamann/mysqlpassadeira:Jun9
echo 'Terminado'
echo 'Id da imagem no DHub: bragamann/mysqlpassadeira:Jun9'


