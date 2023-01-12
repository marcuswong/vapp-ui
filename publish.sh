#!/bin/bash
docker tag vapp-ui:latest  localhost:32000/vapp-ui:latest
docker push localhost:32000/vapp-ui:latest

