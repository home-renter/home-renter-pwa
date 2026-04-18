// packages/shared-types/src/index.ts
// ■■■ HOME RENTER SHARED TYPES ■■■■■■■■■■■■■■■■■■■■■■■■■
// All types in this file are automatically available to both
// apps/web and apps/api when they import @home-renter/shared-types.

// ■■ User roles — matches the PostgreSQL enum defined in Sprint 1 ■■
export type UserRole = 'tenant' | 'landlord' | 'custodian'

// ■■ Property status — mirrors the 'status' enum in the DB ■■
export type PropertyStatus = 'available' | 'booked' | 'inactive'

// ■■ Booking status — drives the state machine in Sprint 2 ■■
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed'

// ■■ Complaint status ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
export type ComplaintStatus = 'open' | 'in_progress' | 'resolved'

// ■■ Study area enum — matches the three zones in the system design ■■
export type AreaSlug = 'onzivu' | 'muni_site' | 'moni'

// ■■ API response wrapper — used by every Hono endpoint ■■
export interface ApiResponse<T> {
  data: T | null
  error: string | null
  ok: boolean
}
