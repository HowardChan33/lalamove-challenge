#!/bin/sh
sudo apt update
sudo apt install nodejs npm
sudo npm install
sudo npm link
sudo apt install sqlite3
sqlite3 llmdatabase.db "CREATE TABLE llm_order (from_location TEXT, to_location TEXT, id INTEGER PRIMARY KEY, is_taken TEXT DEFAULT 0);"