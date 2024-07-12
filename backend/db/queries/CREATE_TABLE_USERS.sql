DROP TABLE IF EXISTS public.users;

CREATE TABLE public.users (
	id serial4 NOT NULL,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_username_key UNIQUE (username)
);

/* INSERT DEFAULT USER */
INSERT INTO users (username, email, password, "createdAt", "updatedAt") VALUES('admin', 'admin@example.com', '$2a$10$.CyH4tUZRfvYDwqaRu7eauyerNZVgREa4iaFIOLdeHTaQx/a9ebGq', now(), now());
