import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
    })
  : null;

export function getWriteClient() {
  const token =
    process.env.SANITY_API_WRITE_TOKEN ||
    process.env.SANITY_AUTH_TOKEN ||
    process.env.SANITY_API_TOKEN ||
    process.env.SANITY_WRITE_TOKEN;

  if (!projectId || !token) return null;

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
  });
}

