-- This is an empty migration.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
INSERT INTO "User" ("id", "email","firstName","lastName","age","password","profileId") VALUES (uuid_generate_v4(), 'admin@admin.com','user','admin',25,'$2a$12$/Yn8HADPUStK8sj2/giEq.TJl4gePc7uLpAUXXOit8I2EoO8GP5XK',(SELECT "id" FROM "Profile" WHERE "role" = 'userAdmin'))
