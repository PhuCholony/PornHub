import { CanActivateFn } from '@angular/router';

export const watchGuard: CanActivateFn = (route, state) => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.searchParams);
  if (!params.has('v') || params.get('v')!.length != 11) {
    return false;
  }
  return true;
};
