#!/bin/bash
docker build . -t apihistorico
echo 'Tagging'
docker tag apihistorico:latest bragamann/apihistorico:Jun9
echo 'Pushing'
docker push bragamann/apihistorico:Jun9
echo 'Terminado'
echo 'Id da imagem no DHub: bragamann/apihistorico:Jun9'


