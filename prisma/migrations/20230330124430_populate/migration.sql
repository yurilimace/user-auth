/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO "Profile" ("id", "role") VALUES (uuid_generate_v4(), 'userAdmin'), (uuid_generate_v4(), 'user');
