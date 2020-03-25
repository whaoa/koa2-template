#!/bin/bash
HOST="rm-8vb19r4nqbus7qipbjo.mysql.zhangbei.rds.aliyuncs.com"
DB="irrigation"
USER="jjtroot"
PASS="Jiajiantao1982"
PORT="3306"
DIR="./app/plugin/model/mysql"
JSON_DEFINED="./app/config/sequelize-auto.config.json"
EXEC="sequelize-auto -o ${DIR} -d ${DB} -h ${HOST} -u ${USER} -p ${PORT} -x ${PASS} -e mysql -a ${JSON_DEFINED}"

#执行
$EXEC
