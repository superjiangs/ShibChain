import request from '@/utils/request';

const bascPath = process.env.NODE_ENV === 'development' ? 'api' : '';

// 登录返回 access_token 用户信息
export async function getCallback(params) {
  return request(`${bascPath}/api/callback`, {
    method: 'GET',
    params,
  });
}

