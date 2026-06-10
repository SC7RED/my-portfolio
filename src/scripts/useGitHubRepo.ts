import { useEffect, useState } from "react";

export interface RepoData {
  name: string;
  description: string | null;
  language: string | null;
  htmlUrl: string;
}

/**
 * Fetches repo metadata from the GitHub API, cached in sessionStorage to stay
 * well under the unauthenticated rate limit. Returns null until loaded — and
 * forever if the request fails, so callers keep showing their fallbacks.
 */
export function useGitHubRepo(repo: string | undefined): RepoData | null {
  const [data, setData] = useState<RepoData | null>(null);

  useEffect(() => {
    if (!repo) return;

    const cacheKey = `github:${repo}`;
    try {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        setData(JSON.parse(cached) as RepoData);
        return;
      }
    } catch {
      /* unreadable cache — fall through to fetch */
    }

    let cancelled = false;
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error(`GitHub API ${res.status}`)),
      )
      .then((json) => {
        const repoData: RepoData = {
          name: json.name,
          description: json.description,
          language: json.language,
          htmlUrl: json.html_url,
        };
        if (!cancelled) {
          setData(repoData);
          try {
            sessionStorage.setItem(cacheKey, JSON.stringify(repoData));
          } catch {
            /* storage full/blocked — fine, we just refetch next visit */
          }
        }
      })
      .catch(() => {
        /* offline or rate-limited — fallback content stays up */
      });

    return () => {
      cancelled = true;
    };
  }, [repo]);

  return data;
}
