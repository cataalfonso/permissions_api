containerId=$(docker ps -f name='permission_api*' -q)
docker exec -it $containerId /opt/mssql-tools/bin/sqlcmd -S localhost,5083 -U SA -P 'M4LRVqm]x,kv' -i /usr/storage/create-schema.sql
docker exec -it $containerId /opt/mssql-tools/bin/sqlcmd -S localhost,5083 -U SA -P 'M4LRVqm]x,kv' -i /usr/storage/firstpopulate.sql
docker exec -it $containerId  /opt/mssql-tools/bin/sqlcmd -S localhost,5083 -U SA -P 'M4LRVqm]x,kv' -Q "SELECT name FROM master.dbo.sysdatabases"
docker exec -it $containerId  /opt/mssql-tools/bin/sqlcmd -S localhost,5083 -U SA -P 'M4LRVqm]x,kv'
