
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Service Worker type
interface ServiceWorkerGlobalScope {
  // Add service worker event handlers
  addEventListener(
    type: 'install',
    listener: (event: ExtendableEvent) => void
  ): void;
  addEventListener(
    type: 'activate',
    listener: (event: ExtendableEvent) => void
  ): void;
  addEventListener(
    type: 'fetch',
    listener: (event: FetchEvent) => void
  ): void;
}

interface ExtendableEvent extends Event {
  waitUntil(promise: Promise<any>): void;
}

interface FetchEvent extends Event {
  request: Request;
  respondWith(response: Promise<Response> | Response): void;
}

// Prevent TypeScript errors with service worker registration
interface WindowEventMap {
  load: Event;
}
