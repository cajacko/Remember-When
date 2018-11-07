./build.sh
docker stop rw
docker rm rw
# docker run -d -it --name=rw remember-when tail -f /dev/null
docker run -d -it --name=rw remember-when yarn deploy -t main-app --deploy-env alpha-deploygate --android
# docker exec -it rw /bin/bash
docker logs --follow rw
docker stop rw
docker rm rw
