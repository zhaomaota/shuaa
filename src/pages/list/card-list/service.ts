import { request } from '@umijs/max';
import type { CardListItemDataType } from './data.d';

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: CardListItemDataType[] } }> {
  return request('/api/card_fake_list', {
    params,
  });
}
export async function getAllData() {
  return request('/bpi/student/getAllData')
}
export async function getData() {
  return request('/bpi/student')
}
