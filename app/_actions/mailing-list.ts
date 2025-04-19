"use server"

import { auth } from "@clerk/nextjs/server"
import { supabaseAdmin } from "@/lib/supabase-admin"
import { MailingListPreferences } from "@/types/mailing-list"
import { revalidatePath } from "next/cache"

type ErrorWithMessage = {
  message: string
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  )
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError

  try {
    return new Error(JSON.stringify(maybeError))
  } catch {
    return new Error(String(maybeError))
  }
}

export async function subscribe(data: {
  user_id: string
  email: string
  name: string | null
  preferences: MailingListPreferences
}) {
  // Check if Supabase is configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { success: false, error: "Supabase not configured" }
  }

  try {
    // First try to update any existing subscription for this user or email
    const { data: existingSub } = await supabaseAdmin
      .from("mailing_list_subscriptions")
      .select()
      .or(`user_id.eq.${data.user_id},email.eq.${data.email}`)
      .maybeSingle()

    if (existingSub) {
      // Update existing subscription
      const result = await supabaseAdmin
        .from("mailing_list_subscriptions")
        .update({
          user_id: data.user_id,
          email: data.email,
          name: data.name,
          preferences: data.preferences,
          subscribed_at: new Date().toISOString(),
          unsubscribed_at: null,
        })
        .eq('id', existingSub.id)

      if (result.error) throw result.error
    } else {
      // Insert new subscription
      const result = await supabaseAdmin
        .from("mailing_list_subscriptions")
        .insert({
          user_id: data.user_id,
          email: data.email,
          name: data.name,
          preferences: data.preferences,
          subscribed_at: new Date().toISOString(),
        })

      if (result.error) throw result.error
    }

    return { success: true }
  } catch (error: unknown) {
    const err = toErrorWithMessage(error)
    console.error("Failed to subscribe:", err)
    return { success: false, error: err.message }
  }
}

export async function unsubscribe(userId: string) {
  // Check if Supabase is configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { success: false, error: "Supabase not configured" }
  }

  try {
    const result = await supabaseAdmin
      .from("mailing_list_subscriptions")
      .update({
        unsubscribed_at: new Date().toISOString(),
      })
      .eq("user_id", userId)

    if (result.error) throw result.error

    revalidatePath("/mailing-list")
    return { success: true }
  } catch (error: unknown) {
    const err = toErrorWithMessage(error)
    console.error("Failed to unsubscribe:", err)
    return { success: false, error: err.message }
  }
}

export async function updatePreferences({ preferences }: { preferences: MailingListPreferences }) {
  // Check if Supabase is configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { success: false, error: "Supabase not configured" }
  }

  try {
    const { userId } = await auth()
    if (!userId) {
      return { success: false, error: "Not authenticated" }
    }

    const result = await supabaseAdmin
      .from("mailing_list_subscriptions")
      .update({
        preferences,
      })
      .eq("user_id", userId)

    if (result.error) throw result.error

    revalidatePath("/mailing-list")
    return { success: true }
  } catch (error: unknown) {
    const err = toErrorWithMessage(error)
    console.error("Failed to update preferences:", err)
    return { success: false, error: err.message }
  }
}

export async function getSubscription() {
  // Check if Supabase is configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { success: false, error: "Supabase not configured" }
  }

  try {
    const { userId } = await auth()
    if (!userId) {
      return { success: false, error: "Not authenticated" }
    }

    const result = await supabaseAdmin
      .from("mailing_list_subscriptions")
      .select()
      .eq("user_id", userId)
      .maybeSingle()

    if (result.error) {
      return { success: false, error: result.error.message }
    }

    return { success: true, data: result.data }
  } catch (error: unknown) {
    const err = toErrorWithMessage(error)
    console.error("Failed to get subscription:", err)
    return { success: false, error: err.message }
  }
} 