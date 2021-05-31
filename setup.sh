#!/bin/sh
sudo npm install -g
sudo npm link -g
sqlite3 ./db/llmdatabase.db "CREATE TABLE llm_order (from_location TEXT, to_location TEXT, id INTEGER PRIMARY KEY, is_taken TEXT DEFAULT 0);"
