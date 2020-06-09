#!/bin/bash
docker build . -t apipassadeira
echo 'Tagging'
docker tag apipassadeira:latest bragamann/apipassadeira:Jun9
echo 'Pushing'
docker push bragamann/apipassadeira:Jun9
echo 'Terminado'
echo 'Id da imagem no DHub: bragamann/apipassadeira:Jun9'


