--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    user_id integer NOT NULL,
    created_at date DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    short_url character(20) NOT NULL,
    url text NOT NULL,
    visit_count integer DEFAULT 0 NOT NULL,
    user_id integer NOT NULL,
    created_at date DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    created_at date DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, '48fedb5c-2aac-432d-8a92-a6865727852a', 2, '2022-12-19');
INSERT INTO public.sessions VALUES (4, '84d073d5-4e43-44c3-bbb2-316585b027fb', 5, '2022-12-21');
INSERT INTO public.sessions VALUES (5, '5d04a80b-ee37-4206-bd03-8d596f24f6e6', 6, '2022-12-22');
INSERT INTO public.sessions VALUES (3, 'f56323e7-2669-4da9-a1d8-6d1beb086804', 1, '2022-12-21');
INSERT INTO public.sessions VALUES (6, 'fe839ce7-94bb-439a-94a6-b4e09283c049', 7, '2022-12-22');
INSERT INTO public.sessions VALUES (2, 'ba305ad0-a52d-4e43-8217-2d4edba40279', 3, '2022-12-19');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (8, 'ZH7W86              ', 'https://www.instagram.com/?theme=dark', 0, 2, '2022-12-21');
INSERT INTO public.urls VALUES (10, 'lQyesD              ', 'https://www.chess.com/', 0, 3, '2022-12-22');
INSERT INTO public.urls VALUES (4, 'gy5nHY              ', 'https://www.google.com/', 5, 3, '2022-12-21');
INSERT INTO public.urls VALUES (11, 'M20hXj              ', 'https://neoxscans.net/', 0, 6, '2022-12-22');
INSERT INTO public.urls VALUES (5, 'hTI6iY              ', 'https://www.youtube.com/watch?v=TMWaJ9j_v5g', 5, 3, '2022-12-21');
INSERT INTO public.urls VALUES (9, 'I1lkLk              ', 'https://neoxscans.net/', 4, 3, '2022-12-22');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Raphael', 'rapha@gmail.om', '$2b$10$grUEv2eQd28d6vhIgXtQquYBSYvOZ6ZANO4/wah9bMrlVnjTAjch.', '2022-12-19');
INSERT INTO public.users VALUES (2, 'joao', 'joao@joao.com', '$2b$10$LCWO5uD.Z9S.3NRPVWzjEOzbzJgsQx2b5Br0WXaE2tDiMBV0EQLta', '2022-12-19');
INSERT INTO public.users VALUES (3, 'thiago', 'thi@gmail.com', '$2b$10$o65WXdRZFFe1/EyjdUGquuddy58EtSoqvErWlieZBRwEqAOAMrpJG', '2022-12-19');
INSERT INTO public.users VALUES (5, 'Borba', 'borba@borba.com', '$2b$10$r.etgPByDGf96eJ/g4OTQ.lYd/ahZGb.Zs1YjkJGawk/Ixae79p4G', '2022-12-21');
INSERT INTO public.users VALUES (6, 'Juli', 'ju@ju.com', '$2b$10$qielqwA6b5zMGU48nJzjn.4JvlvLA.vT2MbdF7AUMGEAqb09BpxMa', '2022-12-22');
INSERT INTO public.users VALUES (7, 'bola', 'bola@bola.com', '$2b$10$Hjl4XIiOJ42jkMlHDlU/YuKpgi5IYroTmXSeU0q6ebq6CH1Xx5ati', '2022-12-22');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 6, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 11, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: urls urls_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

