#!/bin/bash
docker build . -t apilayer
echo 'Tagging'
docker tag apilayer:latest bragamann/apilayer:Jun9
echo 'Pushing'
docker push bragamann/apilayer:Jun9
echo 'Terminado'
echo 'Id da imagem no DHub: bragamann/apilayer:Jun9'


