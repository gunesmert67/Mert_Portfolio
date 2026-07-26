import React from 'react';
import { toast, ToastOptions } from 'react-toastify';

/**
 * Default configuration for toasts to maintain visual consistency
 */
const DEFAULT_TOAST_CONFIG: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'dark',
};

/**
 * Displays a toast notification when a project or service link is missing.
 * @param serviceName Name of the missing service
 */
export const handleMissingLink = (serviceName: string) => {
  toast(
    () => (
      <div className="flex flex-col p-2">
        <p className="text-sm md:text-lg font-bold text-red-500">🚨 Error!</p>
        <p className="mt-1 text-xs md:text-sm text-gray-300">
          The <span className="font-semibold text-white">{serviceName}</span>{' '}
          link is not available right now.
        </p>
      </div>
    ),
    {
      ...DEFAULT_TOAST_CONFIG,
      style: {
        background: 'rgba(10, 17, 25, 0.85)',
        backdropFilter: 'blur(8px)',
        color: '#FBBF24',
        minHeight: '80px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        borderRadius: '12px',
        borderLeft: '4px solid #EF4444',
      },
    },
  );
};

/**
 * Displays a generic information toast with customizable header and text.
 */
const infoToast = (
  header: string,
  text: string,
  position: ToastOptions['position'] = 'top-right',
  autoClose: boolean = false,
) => {
  toast(
    () => (
      <div className="flex flex-col p-2">
        <p className="text-sm md:text-lg font-bold text-yellow-400">{header}</p>
        <p className="mt-1 text-xs md:text-sm text-gray-300">{text}</p>
      </div>
    ),
    {
      ...DEFAULT_TOAST_CONFIG,
      position,
      autoClose: autoClose ? 5000 : false,
      style: {
        background: 'rgba(10, 17, 25, 0.85)',
        backdropFilter: 'blur(8px)',
        color: '#FBBF24',
        minHeight: '80px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        borderRadius: '12px',
        borderLeft: '4px solid #FBBF24',
      },
    },
  );
};
