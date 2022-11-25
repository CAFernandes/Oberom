#!/bin/bash
set -e
psql -v ON_ERROR_STOP=1 --username "app" --dbname "Oberom" <<-EOSQL
	CREATE USER oberom;
	CREATE DATABASE Oberom;
	GRANT ALL PRIVILEGES ON DATABASE oberom TO oberom;
EOSQL
