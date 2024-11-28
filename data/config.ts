export const mysql = {
  host: '127.0.0.1',
  port: '3306',
  username: 'root',
  password: 'root123456',
  database: 'nuecmstest',
  prefix: 'nc_',
};

export const redis = {
  host: '127.0.0.1',
  port: '6379',
  password: '',
};

export const upload = {
  storagePath: '/upload',
  maxSize: 10485760,
  allowedTypes: ['image/jpeg', 'image/png'],
};

export const cookie = {
  prefix: 'ns',
  domain: '',
  path: '/',
};

export const password = {
  salt: '103929ef',
};
