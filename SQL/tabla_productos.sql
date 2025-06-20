--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

-- Started on 2025-05-29 11:41:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 217 (class 1259 OID 49371)
-- Name: productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productos (
    codigo character varying(20) NOT NULL,
    nombre character varying(100) NOT NULL,
    bodega character varying(50) NOT NULL,
    sucursal character varying(50) NOT NULL,
    moneda character varying(20) NOT NULL,
    precio numeric(10,2) NOT NULL,
    tipo_material character varying(200) NOT NULL,
    descripcion text NOT NULL
);


ALTER TABLE public.productos OWNER TO postgres;

--
-- TOC entry 4641 (class 2606 OID 49377)
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (codigo);


-- Completed on 2025-05-29 11:41:00

--
-- PostgreSQL database dump complete
--

