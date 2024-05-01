// import axios from "axios";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useSWR from 'swr';

// interface UseUserOptions {
//   redirectTo?: string;
//   redirectIfFound?: boolean;
//   userId?: string;
// }

// const fetcher = (url: string) =>
//   axios.get(url, { withCredentials: true }).then((data) => {
//     return { user: data.data.data || null };
//   });

// export async function useUser({
//   redirectTo,
//   redirectIfFound,
// }: UseUserOptions = {}) {
//   const navigate = useNavigate();
//   const { data, error } = useSWR("http://localhost:3030/api/user", fetcher);
//   const user = data;
//   const finished = Boolean(data);
//   const hasUser = Boolean(user);

//   useEffect(() => {
//     if (!redirectTo || !finished) return;
//     if (
//       // If redirectTo is set, redirect if the user was not found.
//       (redirectTo && !redirectIfFound && !hasUser) ||
//       (redirectIfFound && hasUser)
//     ) {
//       navigate(redirectTo);
//     }
//   }, [redirectTo, redirectIfFound, finished, hasUser, navigate]);

//   return error ? null : user ;
// }
