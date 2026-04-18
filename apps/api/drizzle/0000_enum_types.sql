-- Migration 0000: Create all PostgreSQL enum types and enable PostGIS
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TYPE user_role AS ENUM ('tenant', 'landlord', 'custodian');
CREATE TYPE property_status AS ENUM ('available', 'booked', 'inactive');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');
CREATE TYPE complaint_status AS ENUM ('open', 'in_progress', 'resolved');
CREATE TYPE area_slug AS ENUM ('onzivu', 'muni_site', 'moni');
