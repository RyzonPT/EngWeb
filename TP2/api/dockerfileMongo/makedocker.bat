#!/bin/bash
docker build . -t mongoengweb
echo 'Tagging'
docker tag mongoengweb:latest bragamann/mongoengweb:Jun9
echo 'Pushing'
docker push bragamann/mongoengweb:Jun9
echo 'Terminado'
echo 'Id da imagem no DHub: bragamann/mongoengweb:Jun9'


