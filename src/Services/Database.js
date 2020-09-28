import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('cashr-app');

db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }]);

const Database = {
  initialize: async () => {
    const sql = [
      `create table if not exists user(
        _id text,
        email text,
        name text,
        role text,
        token text
      );`,

      `create table if not exists category(
        _id text,
        name text
      );`,

      `create table if not exists custom_category(
        _id text,
        name text
      );`,

      `create table if not exists transaction(
        _id text,
        value float,
        type text,
        category text,
        name text
      );`
    ];

    for (const query of sql) {
      await Database.execute(query);
    }
  },

  execute: (sql, args = []) => new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(sql, args, resolve);
    }, reject);
  }),
};

export default Database;
