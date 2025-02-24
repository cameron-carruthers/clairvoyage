import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';
import PocketBase from 'pocketbase';
import { useInterval } from 'usehooks-ts';
import { jwtDecode } from 'jwt-decode';

const BASE_URL = 'http://127.0.0.1:8090';

const ms = (min: number) => min * 60 * 1000;
const fiveMinutesInMs = ms(5);
const twoMinutesInMs = ms(2);


export interface AuthContext {
  isAuthenticated: boolean
  login: () => Promise<void>
  logout: () => void
  user: { [key: string]: any; } | null
}

const AuthContext = createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pb = useMemo(() => new PocketBase(BASE_URL), []);

  const [token, setToken] = useState(pb.authStore.token);
  const [user, setUser] = useState(pb.authStore.model);

  const isAuthenticated = !!user

  const logout = useCallback(() => {
    pb.authStore.clear();
  }, [pb.authStore]);

  const login = useCallback(async () => {
    await pb.collection('users').authWithOAuth2({ provider: 'google' });
  }, [pb]);

  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model);
    });
  }, [pb.authStore]);

  const refreshSession = useCallback(async () => {
    if (!pb.authStore.isValid) return;

    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp || 0;
    const expirationWithBuffer = (tokenExpiration + fiveMinutesInMs) / 1000;

    if (tokenExpiration < expirationWithBuffer) {
      await pb.collection('users').authRefresh();
    }
  }, [pb, token]);

  useInterval(refreshSession, token ? twoMinutesInMs : null);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
