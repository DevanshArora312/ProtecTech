import axios, { AxiosRequestConfig, Method } from 'axios';

export const axiosInstance = axios.create({});

type ApiConnectorParams = {
  method: Method;
  url: string;
  bodyData?: any;
  headers?: Record<string, string>;
  params?: Record<string, any>;
};

export const apiConnector = async ({
  method,
  url,
  bodyData,
  headers,
  params,
}: ApiConnectorParams) => {
  if (!method || !url) {
    throw new Error('Method and URL are required');
  }

  const config: AxiosRequestConfig = {
    method,
    url,
    data: bodyData || null,
    headers: headers || undefined,
    params: params || undefined,
  };

  try {
    const response = await axiosInstance(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
