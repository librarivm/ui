import { useBaseService } from '~/composables/services/useBaseService.js';
import isNil from 'lodash/isNil';

export const useAuthService = () => {
  const $service = useBaseService('auth');
  const id = useCookie('auth.id');
  const token = useCookie('auth.token');

  const login = async () => {
    $service.startLoading();
    // TODO: fetch from /api/v1/login
    $service.stopLoading();
  };

  const logout = async () => {
    $service.startLoading();

    id.value = undefined;
    token.value = undefined;
    $service.unset();

    $service.stopLoading();
  };

  const isAuthenticated = () => !isNil(token.value);

  return $service.merge({
    id,
    token,
    login,
    logout,
    isAuthenticated,
  });
};
