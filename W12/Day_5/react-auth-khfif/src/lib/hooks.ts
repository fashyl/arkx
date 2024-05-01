/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from 'swr';

interface UseUserOptions {
  redirectTo?: string;
  redirectIfFound?: boolean;
  userId?: string;
}

export interface UserHookResult {
    user: any;
    error: any;
    isLoading: boolean;
    isValidating: boolean;
    mutate: (data: any) => Promise<any>;
  }

const fetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((response) => {
    return { user: response || null };
  });

export function useUser({
  redirectTo,
  redirectIfFound,
}: UseUserOptions = {}):UserHookResult {
  const navigate = useNavigate();
  const { data, error, isLoading, isValidating, mutate } = useSWR("http://localhost:3030/api/user", fetcher, {
    shouldRetryOnError: false,
    revalidateOnMount: true,
  });
  const user = data?.user;
  const finished = Boolean(!isLoading || !isValidating)
  const hasUser = Boolean(user);

  
  useEffect(() => {
    if (!redirectTo || !finished ) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirect is set, redirect if the user is found
      (redirectIfFound && hasUser) 
    ) {
      mutate(data);
      navigate(redirectTo);
    }
  }, [redirectTo, redirectIfFound, hasUser, navigate, finished, mutate, data]);

  return error ? error : {
    error,
    user,
    isLoading,
    isValidating,
    mutate
  }
}
