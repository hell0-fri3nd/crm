import React from "react";

export interface AuthLayoutProps {
    children: React.ReactNode;
    name?: string;
    title?: string;
    description?: string;
}

export interface AuthInputProps {
    label: string
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    disabled?: boolean
    errorMessage?: string
}