import type { FirebaseApp } from 'firebase/app'
import type { Auth } from 'firebase/auth'
import type { Database } from 'firebase/database'

export interface FirebaseServices { app: FirebaseApp; auth: Auth; database: Database }

let services: FirebaseServices | undefined

export function isFirebaseConfigured(): boolean {
  return Boolean(import.meta.env.VITE_FIREBASE_API_KEY && import.meta.env.VITE_FIREBASE_DATABASE_URL && import.meta.env.VITE_FIREBASE_PROJECT_ID)
}

export async function getFirebaseServices(): Promise<FirebaseServices> {
  if (services) return services
  if (!isFirebaseConfigured()) throw new Error('Firebase 尚未设定，请先加入 VITE_FIREBASE_* 环境变量。')
  const [appSdk, authSdk, databaseSdk] = await Promise.all([
    import('firebase/app'),
    import('firebase/auth'),
    import('firebase/database'),
  ])
  const { getApp, getApps, initializeApp } = appSdk
  const { connectAuthEmulator, getAuth } = authSdk
  const { connectDatabaseEmulator, getDatabase } = databaseSdk
  const app = getApps().length ? getApp() : initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  })
  const auth = getAuth(app)
  const database = getDatabase(app)
  if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true })
    connectDatabaseEmulator(database, '127.0.0.1', 9000)
  }
  services = { app, auth, database }
  return services
}

export async function authenticateGuest(): Promise<string> {
  const { auth } = await getFirebaseServices()
  if (auth.currentUser) return auth.currentUser.uid
  const { signInAnonymously } = await import('firebase/auth')
  return (await signInAnonymously(auth)).user.uid
}

export async function authenticateResumableGuest(): Promise<string> {
  const { auth } = await getFirebaseServices()
  await auth.authStateReady()
  if (auth.currentUser) return auth.currentUser.uid
  const { browserLocalPersistence, setPersistence, signInAnonymously } = await import('firebase/auth')
  await setPersistence(auth, browserLocalPersistence)
  return (await signInAnonymously(auth)).user.uid
}
