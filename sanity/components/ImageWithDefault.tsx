/**
 * ImageWithDefault — Custom Sanity image input component
 * Shows the default/original photo + the currently uploaded custom photo side by side.
 * Lets the editor see exactly what is live vs what will replace it.
 */
"use client";
import React from "react";
import { ImageInput } from "sanity";

export interface ImageWithDefaultProps {
  defaultSrc?: string;
  defaultLabel?: string;
  value?: any;
  renderDefault?: (props: any) => React.ReactElement;
  [key: string]: any;
}

export function ImageWithDefault(props: ImageWithDefaultProps) {
  const { defaultSrc, defaultLabel, value, renderDefault } = props;

  // Extract URL from the current uploaded image value (Sanity asset ref)
  const hasCustom = !!(value as any)?.asset;

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 10,
        overflow: "hidden",
        background: "#fafafa",
      }}
    >
      {/* Preview strip */}
      {defaultSrc && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: hasCustom ? "1fr 1fr" : "1fr",
            gap: 0,
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          {/* Default / Original photo */}
          <div style={{ padding: "14px 16px 12px" }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: ".07em",
                textTransform: "uppercase",
                color: "#6b7280",
                marginBottom: 8,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#10b981",
                }}
              />
              Default (Live)
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={defaultSrc}
              alt={defaultLabel || "Default photo"}
              style={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                borderRadius: 6,
                border: "1px solid #e5e7eb",
                display: "block",
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div
              style={{
                marginTop: 6,
                fontSize: 11,
                color: "#9ca3af",
                textAlign: "center",
              }}
            >
              {defaultLabel || "Original photo"}
            </div>
          </div>

          {/* Custom / Replacement photo preview */}
          {hasCustom && (
            <div
              style={{
                padding: "14px 16px 12px",
                borderLeft: "1px solid #e5e7eb",
                background: "#fff7ed",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                  color: "#6b7280",
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#f59e0b",
                  }}
                />
                Custom (Replacing)
              </div>
              <div
                style={{
                  width: "100%",
                  height: 160,
                  borderRadius: 6,
                  border: "1px dashed #f59e0b",
                  background: "#fef3c7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  color: "#92400e",
                }}
              >
                Custom photo uploaded ↓
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 11,
                  color: "#92400e",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                This will replace the default
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tip banner */}
      <div
        style={{
          padding: "8px 16px",
          background: hasCustom ? "#fff7ed" : "#f0fdf4",
          borderBottom: "1px solid #e5e7eb",
          fontSize: 11,
          color: hasCustom ? "#92400e" : "#166534",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {hasCustom ? (
          <>
            <span style={{ fontWeight: 800, color: "#f59e0b", fontSize: 13 }}>!</span>
            Custom photo active. <strong>Delete it</strong> below to instantly revert to the original default photo.
          </>
        ) : (
          <>
            <span style={{ fontWeight: 800, color: "#10b981", fontSize: 13 }}>✓</span>
            Using default original photo. Upload a replacement below to change it.
          </>
        )}
      </div>

      {/* The actual Sanity image input */}
      <div style={{ padding: "12px 16px 16px" }}>
        {renderDefault ? renderDefault(props) : <ImageInput {...(props as any)} />}
      </div>
    </div>
  );
}
